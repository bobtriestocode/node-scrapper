const cheerio = require('cheerio')
const axios = require('axios');
const dotenv = require('dotenv');
const db = require('./database/db');
const node_cron = require('node-cron');
dotenv.config();
let puzzle = db.Puzzle;
const link = process.env.LINK;
var start = async function(a, b) { 
    // Your async task will execute with await
    var scraped_data =await axios.get(process.env.LINK);
    const $ = cheerio.load(scraped_data.data) 
    var text = $("table").first().css("background-color","#FFFFDD").find("center > font > a").attr('href');
    var text =link+text;
    var data = {
        "puzzle_url" : text,
        "difficulty": new Date().getDay()
    }    
    try {
        let p1 = new puzzle(data);
        let response = await p1.save();
        console.log(response);
    } catch (error) {
        console.log("there are the catch error", error);
    }
  }

  var task = node_cron.schedule('* 8 * * *', () => {
    console.log('Running a task every');
    start();
  });
  task.start();

