const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue("Hello World"));
console.log(chalk.red.inverse("Imtiaz Super Market"));
console.log(chalk.blue.underline.inverse("Imtiaz Super Market"));
console.log(chalk.green.underline.inverse("Imtiaz Super Market"));

const res = validator.isEmail("adnan@ahmed.com");
console.log(res? chalk.green.inverse("Yes it is email"):chalk.red.inverse("No its not email"));