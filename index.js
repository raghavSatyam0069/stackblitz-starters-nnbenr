// run `node index.js` in the terminal
for (let i = 1; i <= 100; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log('amazon')
    : i % 3 === 0
    ? console.log('google')
    : i % 5 === 0
    ? console.log('facebook')
    : console.log(i);
}
