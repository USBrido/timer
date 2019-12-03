// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// console.log('after callback');

// let argv = process.slice(2);
// let timer = 0;
// argv = argv.sort((a, b) => a - b);
// for (let time of argv) {
//   timer = 0;
// if (argv === []) {
//   return console.log("No alarm set!");
// }
// if (argv < 0 || time == NaN) {
//   time++;
// } else {
//   setTimeout(() =>{
//     process.stdout.write('\x07');
//   }, timer);
//   }
// };
const userInput = process.stdin
userInput.setRawMode(true)
userInput.setEncoding('utf8')

const object = {
  1: 1000,
  2: 2000,
  3: 3000,
  4: 4000,
  5: 5000,
  6: 6000,
  7: 7000,
  8: 8000,
  9: 9000,
};

userInput.on('data', key => {
  if (key === '\u0003') {
    console.log('\n')
    process.exit()
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (object[key]) {
    process.stdout.write(`setting timer for ${[key]} seconds...`);
    let time = object[key];
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  } else {
    console.log('Input invalid');
  }
});