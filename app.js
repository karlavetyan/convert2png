const express = require('express');
const router = express.Router();
const nodeHtmlToImage = require('node-html-to-image');

const app = express();
app.use(
router.get(`/`, async function(req, res) {
    const image = await nodeHtmlToImage({
        html: `<html><body><div>Check out what ${req.query?.text} I just did! #cool</div></body></html>`
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
}));

app.listen(8000)

