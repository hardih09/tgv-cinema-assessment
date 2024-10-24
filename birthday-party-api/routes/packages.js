const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const packages = [
    { id: 1, name: 'Family with Kids', description: 'This package is for Family with their kids.', price: '150.00',
      imgURL: '/bd-kids.jpg',
      offeredList: [
        { label: 'Event party with props.' },
        { label: 'Food and Entertainment' }
      ]
    },
    { id: 2, name: 'Among Friends', description: 'Package for birthday party among friends.', price: '250.00',
      imgURL: '/bd-friends.jpg',
      offeredList: [
        { label: 'Event party with props.' },
        { label: 'Food and Entertainment' },
        { label: 'Movie to Watch' },
        { label: 'Free Popcorn' }
      ]
    },
    { id: 3, name: 'Family, Friends and Children', description: 'All in package for Family an Friends', price: '560.00',
      imgURL: '/bd-family.jpg',
      offeredList: [
        { label: 'Event party with props.' },
        { label: 'Food and Entertainment' },
        { label: 'Movie to Watch' },
        { label: 'Free Popcorn' },
        { label: 'TGV Merchendise' },
        { label: 'Playground for Kids' }
      ]
    }
  ];
  res.json({ packages });
});

module.exports = router;