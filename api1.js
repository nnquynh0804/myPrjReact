const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json());
function getRandomApr(min, max) {
  const randomValue = (Math.random() * (max - min) + min).toFixed(2);
  return `${randomValue}%`;
}
let coins = [
  { id: 'USDC', apr: getRandomApr(0, 20) },
  { id: 'USDT', apr: getRandomApr(0, 20) },
  { id: 'BNB', apr: getRandomApr(0, 20) },
  { id: 'FDUSD', apr: getRandomApr(0, 20) },
  { id: 'AVA', apr: getRandomApr(0, 20) },
];

function updateAprValues() {
  coins = coins.map(coin => ({
    ...coin,
    apr: getRandomApr(0, 20),
  }));
}
app.get('/api/coins', (req, res) => {
  updateAprValues();
  res.json(coins);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
