const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url="http://127.0.0.1:8080/";

  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.pdf({ path: 'Karol_Modzelewski_CV.pdf', format: "A4", printBackground: true });
  await browser.close();

  console.log('CV Created :)');
})();