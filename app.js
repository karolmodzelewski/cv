const puppeteer = require('puppeteer');
const express = require('express');
const app = express();

function generateCV() 
{
    location.href = 'http://127.0.0.1:8080/Karol_Modzelewski_CV';
}  

app.get('/Karol_Modzelewski_CV', function(req, res){
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = "http://127.0.0.1:8080/";
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'Karol_Modzelewski_CV.pdf', format: "A4", printBackground: true });
    await browser.close();
    res.sendFile(__dirname + '/' + 'Karol_Modzelewski_CV.pdf');
  })();
});

var port = process.env.port || 8080;

app.use(express.static(__dirname + '/'));
app.listen(port);