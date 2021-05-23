const express = require('express');
const router = express.Router();
const path = require('path');

router.get(`/api/internal/data/example`, (req, res, next) => {
    res.status(200).send(
        require('../data/example/data.json')
    );
});


module.exports = router;