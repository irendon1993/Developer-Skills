// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day,
 calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem with temperature
// - What is temp amplitude? Answer: differnce between highest and lowest temp
// - How to compute max and min temperature? Answer:
// - Whats a sensor error? And What to do?

// 2 Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtrat min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 'error', 5, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now recieve 2 arrays of temperatures

// 1) understanding the problem
// - With 2 arrays, wshould we implement
