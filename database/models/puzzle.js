const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PuzzleSchema = new Schema({
    puzzle_url: {type: String,unique:true},
    difficulty: {type: Number, default: new Date().getDay()},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Puzzle", PuzzleSchema, "puzzles");
