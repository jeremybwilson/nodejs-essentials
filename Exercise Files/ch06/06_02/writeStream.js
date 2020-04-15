const fs = require("fs");

const writeStream = fs.createWriteStream("../assets/myFile.txt", "UTF-8");

const readstream = fs.createReadStream("../assets/lorum-ipsum.md", "UTF-8");

// process.stdout.write("hello");
// process.stdout.write("world\n");

// readstream.on("data", data => {
//   writeStream.write(data);
// })

readstream.pipe(writeStream);
