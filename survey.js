const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example of how to use readline module:
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.question("What is your name? ", (name) => {
  rl.question("What are your pronouns? ", (pronouns) => {
    rl.question("Where do you live? ", (location) => {
      rl.question("What is your favourite breakfast food? ", (food) => {
        rl.question("What is the name if your favourite book? ", (book) => {
          rl.question("Tell us one interesting thing about you: ", (thing) => {
            rl.close();
            console.log(`Hi! My name is ${name} and my pronouns are ${pronouns}. I live in ${location}. My absolute favourite breakfast food is ${food}. My favourite book is ${book}. ${thing}.`);
          })
        })
      })
    })
  })
});