/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_color_free(a: number): void;
export function color_grid_color(a: number): void;
export function color_alive_color(a: number): void;
export function color_dead_color(a: number): void;
export function color_recently_dead_color(a: number): void;
export function __wbg_universe_free(a: number): void;
export function universe_new(a: number, b: number, c: number, d: number): number;
export function universe_render(a: number, b: number): void;
export function universe_width(a: number): number;
export function universe_height(a: number): number;
export function universe_cells(a: number): number;
export function universe_toggle_cell(a: number, b: number, c: number): void;
export function universe_set_alive(a: number, b: number, c: number): void;
export function universe_set_dead(a: number, b: number, c: number): void;
export function universe_randomize_cells(a: number): void;
export function universe_tick(a: number): number;
export function universe_draw_grid(a: number): void;
export function universe_draw_cells(a: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
