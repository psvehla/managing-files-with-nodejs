const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 500000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
  fs.close(fd, () => {});
}
