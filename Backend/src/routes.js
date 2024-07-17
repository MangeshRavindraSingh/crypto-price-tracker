const express = require('express');
const axios = require('axios');
const Price = require('./models/Price');

const router = express.Router();

router.get('/', async (req, res) => {
  const { symbol } = req.query;
  try {
    const prices = await Price.find({ symbol })
      .sort({ timestamp: -1 })
      .limit(20);
    res.json(prices);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const fetchPrices = async () => {
  try {
    const symbols = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'cardano'];
    const { data } = await axios.get(process.env.COINGECKO_API, {
      params: {
        ids: symbols.join(','),
        vs_currencies: 'usd',
      },
    });

    for (let symbol of symbols) {
      const price = new Price({
        symbol,
        price: data[symbol].usd,
      });
      await price.save();
    }

  } catch (err) {
    console.error('Error fetching prices:', err.message);
  }
};

setInterval(fetchPrices, 5000);

module.exports = router;
