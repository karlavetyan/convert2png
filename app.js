const express = require('express');
const router = express.Router();
const nodeHtmlToImage = require('node-html-to-image');


const app = express();

app.use(
router.get(`/`, async function(req, res) {
    const image = await nodeHtmlToImage({
        html: `<head>
      <style>
        body {
          width: 1200px;
          height: 650px;
        }
      </style>
    </head>
    <body>Hello world!</body>
  </html>`
    });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
}));

app.listen(80, () => console.log('app running on 80 port'))

