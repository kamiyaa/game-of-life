/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead,
  Alive,
}
export class Universe {
  free(): void;
/**
* @param {number} width 
* @param {number} height 
* @returns {Universe} 
*/
  static new(width: number, height: number): Universe;
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
* @returns {boolean} 
*/
  tick(): boolean;
}
