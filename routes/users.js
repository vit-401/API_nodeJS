const express = require('express');

const router = express.Router();

//http://localhost:3000/user

router.get('/', (req, res) => {
    res.send('We are on user')
})

// http://localhost:3000/user/specific

router.get('/specific', (req, res) => {
    res.send('Specific USER')
})

module.exports = router;