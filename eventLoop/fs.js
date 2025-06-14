const fs = require("node:fs");
const data =
  "Hii dear Aoyan !! .How Are You ? Whats about your family members ?";

// Writing  Data into file file asynchronysly
fs.writeFile("data.txt", data, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!", data);
});

// Reading data From file asynchronysly
fs.readFile("data.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});
