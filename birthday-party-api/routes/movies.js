const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const movies = [
    { id: 1, name: 'Frozen' },
    { id: 2, name: 'Toy Story' },
    { id: 3, name: 'Finding Nemo' }
  ];
  res.json({ movies });
});

module.exports = router;