const http = require('http');
const { chromium } = require("playwright");


http.createServer(async function (req, res) {
    let browser = await chromium.launch();

    let page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 650 });
    await page.goto(`http://159.223.232.30/quoteBot/view.php?type${req.query?.text}&text=${req.query?.text}&name=${req.query?.name}`);
    const buffer = await page.screenshot();
    await browser.close();

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(buffer, 'binary');
}).listen(80, '127.0.0.1');
