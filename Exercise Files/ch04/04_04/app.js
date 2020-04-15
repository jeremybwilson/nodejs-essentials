const name = require('path');

const { inc, dec, getCount } = require("./myModule");
// console.log(name);

inc();
inc();
inc();
dec();

console.log(getCount());
