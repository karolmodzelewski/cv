const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

app.get('/Karol_Modzelewski_CV', function(req, res){
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = "http://127.0.0.1:8080/";
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'Karol_Modzelewski_CV.pdf', format: "A4", printBackground: true });
    res.sendFile(__dirname + '/' + 'Karol_Modzelewski_CV.pdf');
    await browser.close();
  })();
});

var port = process.env.port || 8080;

app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('Go to: http://127.0.0.1:8080/');