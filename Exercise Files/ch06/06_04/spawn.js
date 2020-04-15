const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Jeremy \n");
questionApp.stdin.write("Seattle \n");
questionApp.stdin.write("Learn Node because it is cool \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`qustionApp process exited`);
})
