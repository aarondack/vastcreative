import express from 'express';
import webpack from 'webpack';
import prodConfig from './webpack.production.babel.js';
import path from 'path';

const app = express();
const ADDRESS = '0.0.0.0';
const PORT = 3030;
const compiler = webpack(prodConfig);

const publicPath = path.join(__dirname, '../dist/');

const indexPath = path.join(__dirname, '../index.html');
app.use('/static', express.static(publicPath));


app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT,ADDRESS, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${ADDRESS}:${PORT}`);
});
