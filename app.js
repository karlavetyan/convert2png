const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

const app = express();

app.use(
router.get(`/`, async function(req, res) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 650 })
    await page.goto(`https://karl.am/quoteBot/view.php?type=${req.query?.text}&text=${req.query?.text}&name=${req.query?.name}`)
    const img = await page.screenshot()
    await browser.close()

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(img, 'binary');
}));

app.listen(8080, () => console.log('app running on 8080 port'))

