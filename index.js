const core = require('@actions/core');

function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

try {
  const number = core.getInput('number');
  console.log(`Calcurate FizzBuzz below ${number}.`);

  fizzbuzz(number);

  console.log(`Completed FizzBuzz!!`);
} catch (error) {
  core.setFailed(error.message);
}
