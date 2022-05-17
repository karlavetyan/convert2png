const express = require('express');
const router = express.Router();
const screen = require("node-server-screenshot");

const app = express();

app.use(
router.get(`/`, async function(req, res) {
    const img = await screen.fromURL(`https://karl.am/quoteBot/view.php?type=${req.query?.text}&text=${req.query?.text}&name=${req.query?.name}`);

    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(img, 'binary');
}));

app.listen(8080, () => console.log('app running on 8080 port'))

