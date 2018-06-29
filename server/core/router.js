const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hi!' });
});

router.post('/log', (req, res) => {
  res.status(200).json({ msg: 'teste' });
});

module.exports = router;
