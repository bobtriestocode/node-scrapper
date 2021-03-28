const cheerio = require('cheerio')
const axios = require('axios');
const link = "https://www.chessgames.com";

var start = async function(a, b) { 
    // Your async task will execute with await
    var scraped_data =await axios.get("https://www.chessgames.com");
    const $ = cheerio.load(scraped_data.data) 
    var text = $("table").first().css("background-color","#FFFFDD").find("center > font > a").attr('href');
    var text =link+text;
    console.log(text);
  }

start();

