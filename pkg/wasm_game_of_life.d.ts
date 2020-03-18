/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead,
  Alive,
  RecentlyDead,
}
export class Color {
  free(): void;
/**
* @returns {string} 
*/
  static grid_color(): string;
/**
* @returns {string} 
*/
  static alive_color(): string;
/**
* @returns {string} 
*/
  static dead_color(): string;
/**
* @returns {string} 
*/
  static recently_dead_color(): string;
}
export class Universe {
  free(): void;
/**
* @param {string} canvas_name 
* @param {number} width 
* @param {number} height 
* @returns {Universe} 
*/
  static new(canvas_name: string, width: number, height: number): Universe;
/**
* @returns {string} 
*/
  render(): string;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
/**
* @param {number} row 
* @param {number} column 
*/
  toggle_cell(row: number, column: number): void;
/**
* @param {number} row 
* @param {number} column 
*/
  set_alive(row: number, column: number): void;
/**
* @param {number} row 
* @param {number} column 
*/
  set_dead(row: number, column: number): void;
/**
*/
  randomize_cells(): void;
/**
* @returns {boolean} 
*/
  tick(): boolean;
/**
*/
  draw_grid(): void;
/**
*/
  draw_cells(): void;
}
