import { createDiv } from 'demo-tools';
import { getClockDrawing } from './tools/clock';
import { log } from './tools/log';

/**
 * 
 * @param {number} w 
 * @param {number} h 
 * @returns {HTMLCanvasElement} canvas
 */
function createCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.style.border = '1px solid black';
  document.body.style.position = 'relative';
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  document.body.appendChild(canvas);
  return canvas;
}

/**
 * @typedef {{
*   w: number,
*   h: number,
*   cellSize: number,
*   gap: number
* }} GridOptions
* 
* @param {CanvasRenderingContext2D} ctx 
* @param {GridOptions} options 
* @description Draw a grid on the canvas
*/
// eslint-disable-next-line no-unused-vars
function drawGrid(ctx, options) {
 const { w, h, cellSize, gap } = options;
 for (let x = 0; x < w; x += cellSize + gap) {
   for (let y = 0; y < h; y += cellSize + gap) {
     ctx.strokeRect(x, y, cellSize, cellSize);
   }
 }
}

function main() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvas = createCanvas(width, height);
  
  const drawClock = getClockDrawing(canvas);

  const animation = () => {
    drawClock();
    requestAnimationFrame(animation);
  }

  animation();
}

/** 性能分析 
 * @param {string} testDescription
 * @param {() => void} fn
*/
function performanceTest(testDescription, fn) {
  log.profile(testDescription);
  fn();
  log.profileEnd();
}

performanceTest("test canvas code's performance", main);

log(createDiv());