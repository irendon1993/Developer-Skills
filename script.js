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

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// calcTempAmplitude([3, 7, 4, 'error', 5, 8]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now recieve 2 arrays of temperatures

// 1) understanding the problem
// - With 2 arrays, wshould we implement functionatlity twice? No! Just merge two arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// debugger;

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX

//     value: 10,
//   };

//   // B) FIND
//   console.log(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // Using Debgugger
// debugger;
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understand the problem
// - print forecast with degrees

// 2) Breaking up into sub-problems
// - Add ... to messages
// - Add days to messages
//

// debugger;
const printForecast = function (arr) {
  let dots = '... ';
  let forecast = '';

  const weekForecast = [];

  for (let i = 0; i < arr.length; i++) {
    let day = arr.length + 1 - (arr.length - i);
    // B) FIND
    // if (arr[i] >= 0) {
    forecast = dots + arr[i] + `ºC in ${day} days `;
    weekForecast.push(forecast);
    // } else {
    //   let negativeDay = -1 * arr[i];
    //   forecast = dots + arr[i] + `ºC in ${negativeDay} days `;
    //   weekForecast.push(forecast);
    // }
  }
  return weekForecast;
};

// let testData = [17, 21, 23];
// A) IDENTIFY
let testData = [12, 5, -5, 0, 4, 4, 4, 2, 4, 2, -5, -2, -5, -6, 43, 3];
console.log(printForecast(testData));

// TEST DATA 2: [12, 5, -5, 0, 4]
