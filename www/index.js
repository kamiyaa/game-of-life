import { Universe, Cell, Color } from "wasm-game-of-life";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";

import "./index.scss";

const CELL_SIZE = 15 | 0;

{
	document.getElementById("AliveCellColor").style.backgroundColor = Color.alive_color();
	document.getElementById("RecentlyDeadCellColor").style.backgroundColor = Color.recently_dead_color();
	document.getElementById("DeadCellColor").style.backgroundColor = Color.dead_color();
}

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

	universe.draw_cells();
});

const createCanvasBtn = document.getElementById("create-canvas-btn");
function createUniverse() {
	const widthField = document.getElementById("CanvasWidth");
	const width = widthField.value;

	const heightField = document.getElementById("CanvasHeight");
	const height = heightField.value;

	canvas.height = (CELL_SIZE + 1) * height + 1;
	canvas.width = (CELL_SIZE + 1) * width + 1;

	universe = Universe.new("game-of-life-canvas", width, height);
	universe_width = universe.width();
	universe_height = universe.height();

	universe.draw_grid();
	universe.draw_cells();
}
createCanvasBtn.addEventListener("click", event => {
	createUniverse();
});

const randomizeBtn = document.getElementById("randomize-btn");
function randomizeCells() {
	if (universe === null) {
		alert("No board has been created yet");
		return;
	}
	universe.randomize_cells();
	universe.draw_cells();
}
randomizeBtn.addEventListener("click", event => {
	randomizeCells();
});

let animationId = null;

let paused = true;
let interval = document.getElementById("CanvasUpdateInterval").value;

const isPaused = () => {
	return animationId === null;
};

const play = () => {
	if (universe === null) {
		alert("No board has been created yet");
		return;
	}
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
		if (paused) {
			return;
		}

		if (!universe.tick()) {
			pause();
		}
		universe.draw_cells();
		animationId = requestAnimationFrame(renderLoop);

	}, interval);
};

const playPauseButton = document.getElementById("play-pause-btn");
playPauseButton.textContent = "Play";
playPauseButton.addEventListener("click", event => {
	if (isPaused()) {
		play();
	} else {
		pause();
	}
});
