const express = require('express');
const router = express.Router();
const { chromium } = require("playwright");

const app = express();

app.use(
router.get(`/`, async function(req, res) {
    let browser = await chromium.launch();

    let page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 650 });
    await page.goto(`/quote/view.php?type${req.query?.text}&text=${req.query?.text}&name=${req.query?.name}`);
    const buffer = await page.screenshot();
    await browser.close();

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(buffer, 'binary');
}));

app.listen(26, () => console.log('app running on 26 port'))

