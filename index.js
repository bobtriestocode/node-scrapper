const cheerio = require('cheerio')
const axios = require('axios');
const db = require('./database/db');
let puzzle = db.Puzzle;
const link = "https://www.chessgames.com";
var start = async function(a, b) { 
    // Your async task will execute with await
    var scraped_data =await axios.get("https://www.chessgames.com");
    const $ = cheerio.load(scraped_data.data) 
    var text = $("table").first().css("background-color","#FFFFDD").find("center > font > a").attr('href');
    var text =link+text;
    var data = {
        "puzzle_url" : text
    }
    try {
        let testAddress = new puzzle(data);
        let response = await testAddress.save();
        console.log(response);
    } catch (error) {
        console.log("there are the catch error", error);
    }
  }
//changing one line of code.
start();



