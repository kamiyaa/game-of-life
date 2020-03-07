import { Universe, Cell } from "wasm-game-of-life";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";

import "./index.scss";

const CELL_SIZE = 15; // px
const GRID_COLOR = "#606fbc";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#606fbc";

const canvas = document.getElementById("game-of-life-canvas");
const ctx = canvas.getContext('2d');

let universe = null;
let universe_width = 0;
let universe_height = 0;

let mouse_down = false;

canvas.addEventListener("mousedown", event => {
	mouse_down = true;
});

canvas.addEventListener("mouseup", event => {
	mouse_down = false;
});

canvas.addEventListener("mousemove", event => {
	if (!paused || !mouse_down) {
		return;
	}
	const boundingRect = canvas.getBoundingClientRect();

	const scaleX = canvas.width / boundingRect.width;
	const scaleY = canvas.height / boundingRect.height;

	const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
	const canvasTop = (event.clientY - boundingRect.top) * scaleY;

	const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), universe_height - 1);
	const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), universe_width - 1);

	universe.set_alive(row, col);

	drawCells(ctx);
});

const createCanvasBtn = document.getElementById("CreateCanvas");
function createUniverse() {
	const widthField = document.getElementById("CanvasWidth");
	const width = widthField.value;

	const heightField = document.getElementById("CanvasHeight");
	const height = heightField.value;

	canvas.height = (CELL_SIZE + 1) * height + 1;
	canvas.width = (CELL_SIZE + 1) * width + 1;

	universe = Universe.new(width, height);
	universe_width = universe.width();
	universe_height = universe.height();

	drawGrid(ctx);
	drawCells(ctx);
}
createCanvasBtn.addEventListener("click", event => {
	createUniverse();
});

const getIndex = (row, column) => {
	return row * universe_width + column;
};

const drawGrid = (ctx) => {
	ctx.beginPath();
	ctx.strokeStyle = GRID_COLOR;

	// Vertical lines.
	for (let i = 0; i <= universe_width; i++) {
		ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
		ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * universe_height + 1);
	}

	// Horizontal lines.
	for (let j = 0; j <= universe_height; j++) {
		ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);
		ctx.lineTo((CELL_SIZE + 1) * universe_width + 1, j * (CELL_SIZE + 1) + 1);
	}

	ctx.stroke();
};

const drawCells = (ctx) => {
	const cellsPtr = universe.cells();
	const cells = new Uint8Array(memory.buffer, cellsPtr, universe_width * universe_height);

	ctx.beginPath();

	for (let row = 0; row < universe_height; row++) {
		for (let col = 0; col < universe_width; col++) {
			const idx = getIndex(row, col);

			ctx.fillStyle = cells[idx] === Cell.Dead
				? DEAD_COLOR
				: ALIVE_COLOR;

			ctx.fillRect(
				col * (CELL_SIZE + 1) + 1,
				row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);
		}
	}

	ctx.stroke();
};

let animationId = null;

let paused = true;
let interval = document.getElementById("CanvasUpdateInterval").value;

const isPaused = () => {
	return animationId === null;
};

const play = () => {
	interval = document.getElementById("CanvasUpdateInterval").value;
	paused = false;
	playPauseButton.textContent = "Pause";
	renderLoop();
};

const pause = () => {
	playPauseButton.textContent = "Play";
	cancelAnimationFrame(animationId);
	animationId = null;
	paused = true;
};

const renderLoop = () => {
	setTimeout( () => {
		if (!paused) {
			if (universe.tick()) {
				drawCells(ctx);

				animationId = requestAnimationFrame(renderLoop);
			} else {
				pause();
			}
		}
	}, interval);
};

const playPauseButton = document.getElementById("play-pause");
playPauseButton.textContent = "Play";
playPauseButton.addEventListener("click", event => {
	if (isPaused()) {
		play();
	} else {
		pause();
	}
});
