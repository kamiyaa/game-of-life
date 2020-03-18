mod utils;

use std::fmt;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

const CELL_SIZE: u32 = 15;
const GRID_COLOR: &'static str = "#454545";
const ALIVE_COLOR: &'static str = "#32b9fc";
const DEAD_COLOR: &'static str = "#FFFFFF";
const RECENTLY_DEAD_COLOR: &'static str = "#96e0ff";

#[wasm_bindgen]
pub struct Color;

#[wasm_bindgen]
impl Color {
    pub fn grid_color() -> String {
        GRID_COLOR.to_string()
    }

    pub fn alive_color() -> String {
        ALIVE_COLOR.to_string()
    }

    pub fn dead_color() -> String {
        DEAD_COLOR.to_string()
    }

    pub fn recently_dead_color() -> String {
        RECENTLY_DEAD_COLOR.to_string()
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
    RecentlyDead = 2,
}

impl Cell {
    fn toggle(&mut self) {
        *self = match *self {
            Cell::Dead => Cell::Alive,
            Cell::Alive => Cell::RecentlyDead,
            Cell::RecentlyDead => Cell::Dead,
        };
    }

    fn get_color(&self) -> &str {
        match *self {
            Cell::Dead => DEAD_COLOR,
            Cell::Alive => ALIVE_COLOR,
            Cell::RecentlyDead => RECENTLY_DEAD_COLOR,
        }
    }

    fn set_alive(&mut self) {
        *self = Cell::Alive;
    }

    fn set_dead(&mut self) {
        *self = Cell::Dead;
    }
}

#[wasm_bindgen]
pub struct Universe {
    canvas_name: String,
    context: web_sys::CanvasRenderingContext2d,
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

#[wasm_bindgen]
impl Universe {
    pub fn new(canvas_name: String, width: u32, height: u32) -> Self {
        let cells = (0..width * height)
            .map(|_| Cell::Dead)
            .collect();

        let document = web_sys::window().unwrap().document().unwrap();
        let canvas = document.get_element_by_id(canvas_name.as_str()).unwrap();
        let canvas: web_sys::HtmlCanvasElement = canvas
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

        Self {
            canvas_name,
            context,
            width,
            height,
            cells,
        }
    }

    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    fn get_context(&self) -> &web_sys::CanvasRenderingContext2d {
        &self.context
    }

    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);

                if let Cell::Alive = self.cells[idx] {
                    count += 1;
                }
            }
        }
        count
    }

    pub fn render(&self) -> String {
        self.to_string()
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }

    pub fn toggle_cell(&mut self, row: u32, column: u32) {
        let idx = self.get_index(row, column);
        self.cells[idx].toggle();
    }

    pub fn set_alive(&mut self, row: u32, column: u32) {
        let idx = self.get_index(row, column);
        self.cells[idx].set_alive();
    }

    pub fn set_dead(&mut self, row: u32, column: u32) {
        let idx = self.get_index(row, column);
        self.cells[idx].set_dead();
    }

    pub fn randomize_cells(&mut self) {
        let cells = (0..self.width * self.height)
            .map(|_| if js_sys::Math::random() < 0.5 {
                Cell::Dead
            } else {
                Cell::Alive
            })
            .collect();
        self.cells = cells;
    }

    pub fn tick(&mut self) -> bool {
        let mut changed = false;
        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                let next_cell = match (cell, live_neighbors) {
                    // Rule 1: Any live cell with fewer than two live neighbours
                    // dies, as if caused by underpopulation.
                    (Cell::Alive, x) if x < 2 => Cell::RecentlyDead,
                    // Rule 2: Any live cell with two or three live neighbours
                    // lives on to the next generation.
                    (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    // Rule 3: Any live cell with more than three live
                    // neighbours dies, as if by overpopulation.
                    (Cell::Alive, x) if x > 3 => Cell::RecentlyDead,
                    // Rule 4: Any dead cell with exactly three live neighbours
                    // becomes a live cell, as if by reproduction.
                    (Cell::RecentlyDead, 3) => Cell::Alive,
                    (Cell::RecentlyDead, _) => Cell::Dead,
                    (Cell::Dead, 3) => Cell::Alive,
                    // All other cells remain in the same state.
                    (otherwise, _) => otherwise,
                };
                if !changed && next_cell != next[idx] {
                    changed = true;
                }

                next[idx] = next_cell;
            }
        }

        self.cells = next;
        changed
    }

    pub fn draw_grid(&self) {
        let context = self.get_context();
        context.begin_path();

        for i in 0..self.width {
            context.move_to((i * (CELL_SIZE + 1) + 1).into(), 0 as f64);
            context.line_to((i * (CELL_SIZE + 1) + 1).into(),
                    ((CELL_SIZE + 1) * self.height + 1).into());
        }

        for j in 0..self.height {
            context.move_to(0 as f64, (j * (CELL_SIZE + 1) + 1).into());
            context.line_to(((CELL_SIZE + 1) * self.width + 1).into(),
                    (j * (CELL_SIZE + 1) + 1).into());
        }

        context.stroke();
    }

    pub fn draw_cells(&self) {
        let context = self.get_context();
        context.begin_path();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);

                let color_js = JsValue::from_str(self.cells[idx].get_color());
                context.set_fill_style(&color_js);

                context.fill_rect(
                    (col * (CELL_SIZE + 1) + 1).into(),
                    (row * (CELL_SIZE + 1) + 1).into(),
                    CELL_SIZE.into(),
                    CELL_SIZE.into()
                );
            }
        }
        context.stroke();
    }
}

impl fmt::Display for Universe {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for line in self.cells.as_slice().chunks(self.width as usize) {
            for &cell in line {
                let symbol = if cell == Cell::Dead { '◻' } else { '◼' };
                write!(f, "{}", symbol)?;
            }
            write!(f, "\n")?;
        }
        Ok(())
    }
}
