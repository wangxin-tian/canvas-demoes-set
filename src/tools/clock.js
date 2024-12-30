/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */

/**
 * 画一个时钟
 * @param {HTMLCanvasElement} canvas 
 */
export function getClockDrawing(canvas) {
  const context = canvas.getContext('2d'),
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNACTION = canvas.width / 25,
    HOUR_HAND_TRUNCATION = canvas.width / 10,
    NUMERAL_SPACING = 20,
    RADIUS = Math.min(canvas.width / 3, canvas.height / 3) - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

  function drawCicle() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true);
    context.stroke();
  }

  function drawNumerals() {
    const numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let angle = 0,
      numeralWidth = 0;

    numerals.forEach(numeral => {
      angle = Math.PI / 6 * (numeral - 3);
      numeralWidth = 0;
      context.fillText(String(numeral), canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2, canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3);
    });
  }

  function drawCenter() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
    context.fill();
  }

  /**
   * 
   * @param {number} loc 转动基数
   * @param {boolean} isHour 控制路径长度
   * @param {number} width 
   */
  function drawHand(loc, isHour, width) {
    const angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
      handRadius = isHour ? RADIUS - HAND_TRUNACTION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNACTION;

    context.lineWidth = width;
    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, canvas.height / 2 + Math.sin(angle) * handRadius);
    context.stroke();
  }

  function drawHands() {
    const date = new Date();
    let  hour = date.getHours();

    hour = hour > 12 ? hour - 12 : hour;

    drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, 0.5);
    drawHand(date.getMinutes(), false, 0.5);
    drawHand(date.getSeconds(), false, 0.2);
  }

  function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCicle();
    drawNumerals();
    drawCenter();
    drawHands();
  }

  return drawClock;
}