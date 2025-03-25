require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const OBJECT_TYPE_ID = process.env.OBJECT_TYPE_ID;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE_ID}?properties=name,brand,type`,
      {
        headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` }
      }
    );
    const cars = response.data.results;
    res.render('homepage', { cars });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('Error fetching cars.');
  }
});

app.get('/update-cobj', (req, res) => {
  res.render('updates', { title: 'Update Custom Object Form | HubSpot Practicum' });
});

app.post('/update-cobj', async (req, res) => {
  const { name, brand, type } = req.body;

  try {
    await axios.post(
      `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE_ID}`,
      { properties: { name, brand, type } },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.redirect('/');
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('Error creating car.');
  }
});

app.listen(PORT, () => {
  console.log(`🚗 App running at http://localhost:${PORT}`);
});
