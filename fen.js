const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const context = browser.defaultBrowserContext();
  context.overridePermissions('https://www.chessgames.com/perl/chessgame?gid=1348978&m=38.5', ['clipboard-read'])

  const page = await browser.newPage();
  await page.goto('https://www.chessgames.com/perl/chessgame?gid=1348978&m=38.5');
  await page.click('button[class="options_link"]');
//   await page.evaluate(() => {
//     const element = document.getElementsByClassName('options_link')
//     if(element) {
//       element.scrollIntoView();
//     }
//   }, selector, i);
    // await page.waitForXPath('fen_box')
    let element = await page.$('#fb')
    let value = await page.evaluate(el => el.textContent, element)
    console.log(value)

    // await page.screenshot({ path: 'example.png', fullPage: true  });    
    // const FEN = await page.evaluate(
    //   () => {
    //     return navigator.clipboard.readText()
    //   })
    //   console.log(FEN)
    await browser.close();
})();