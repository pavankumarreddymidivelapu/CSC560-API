const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// POST route to create a new item
router.post('/', async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
