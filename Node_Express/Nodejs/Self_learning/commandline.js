import { styleText } from 'node:util';

// const x = 'x';
// const y = 'y';

// // console.log(x, y);
// // console.log('My %s has %d ears', 'cat', 2);
// console.log('%o', Number);




// counting elements 

// const x = 1;
// const y = 2;
// const z = 3;

// console.count(
//   'The value of x is ' + x + ' and has been checked .. how many times?'
// );

// console.count(
//   'The value of x is ' + x + ' and has been checked .. how many times?'
// );

// console.count(
//   'The value of y is ' + y + ' and has been checked .. how many times?'
// );


// const oranges = ['orange', 'orange'];
// const apples = ['just one apple'];

// oranges.forEach(fruit => {
//   console.count(fruit);
// });
// //orange:1, orange:2
// apples.forEach(fruit => {
//   console.count(fruit);
// });//just one apple:1





// Reset Counting 

// const oranges = ['Apple', 'orange'];
// // const apples = ['just one apple'];

// oranges.forEach(fruit => {
//   console.count(fruit);
// });
// // apples.forEach(fruit => {
// //   console.count(fruit);
// // });

// console.countReset('Apple');

// oranges.forEach(fruit => {
//   console.count(fruit);
// });




// Print the stack trace
// const processPayment = () => {
//   console.trace("Payment process started");
// };

// const checkout = () => {
//   processPayment();
// };

// checkout();


// calculate the time spent 
// const doSomething = () => console.log('test');
// const measureDoingSomething = () => {
//   console.time('doSomething()');
//   // do something, and measure the time it takes
//   doSomething();
//   console.timeEnd('doSomething()');
// };
// measureDoingSomething();


console.log(
  styleText(['red'], 'This is red text ') +
    styleText(['green', 'bold'], 'and this is green bold text ') +
    'this is normal text'
);

