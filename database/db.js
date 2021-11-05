
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
mongoose.connect(process.env.DB_STRING, {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
module.exports = {
    Puzzle: require('./models/puzzle'),
};