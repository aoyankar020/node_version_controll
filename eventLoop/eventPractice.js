const EventEmitter = require("node:events");

class Reader extends EventEmitter {}
const reader = new Reader();

reader.on("read", (error, data) => {
  if (error) {
    throw error;
  }
  console.log("Reader is Reading", data);
});

reader.reader.emit("read", null, "chapter 1");
