/* eslint-disable no-console */

/**
 * @param {any[]} args
 */
export function log(...args) {
  console.log(...args);
}

/**
 * @param {boolean} condition 
 * @param  {...any} args 
 */
log.assert = (condition, ...args) => {
  if (!condition) {
    console.assert(false, ...args);
  }
}

/**
 * @param  {...any} args 
 */
log.error = (...args) => {
  console.error(...args);
}

/**
 * @param  {...any} args 
 */
log.profile = (...args) => {
  // @ts-ignore
  console.profile(...args);
}

// @ts-ignore
log.profileEnd = console.profileEnd;