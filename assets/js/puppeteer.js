const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: true,
      args: [
          `--window-size=800,600`
      ],
  });
  const page = await browser.newPage();
  await page._client.send('Emulation.clearDeviceMetricsOverride');
  const url="http://127.0.0.1:8080/";  
  await page.setViewport({width: 800, height: 600});
  await page.goto(url, {waitUntil: 'networkidle2'});    
  await page.pdf({path: 'viewport_test.pdf', format:"A4", printBackground:true});
  await browser.close();
  console.log("done!");  
})();