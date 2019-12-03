let argv = process.slice(2);
let timer = 0;
argv = argv.sort((a, b) => a - b);
for (let time of argv) {
  timer = 0;
if (argv === []) {
  return console.log("No alarm set!");
}
if (argv < 0 || time == NaN) {
  time++;
} else {
  setTimeout(() =>{
    process.stdout.write('\x07');
  }, timer);
  }
};