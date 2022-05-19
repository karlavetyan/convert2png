const http = require('http');
const { chromium } = require("playwright");


http.createServer(async function (req, res) {
    let browser = await chromium.launch({
        headless: false,
        ignoreHTTPSErrors: true
    });

    let page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 650 });
    await page.goto(`https://karl.am/quoteBot/view.php?type${req.query?.text}&text=${req.query?.text}&name=${req.query?.name}`);
    const buffer = await page.screenshot();
    await browser.close();

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(buffer, 'binary');
}).listen(8000, '127.0.0.1');
