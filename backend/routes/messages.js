const express = require('express');
const router = express.Router();

const Message = require('../model/message');

router.get('/', async (req, res, next) => {
    try {
        const messages = await Message.find();
        res.status(200).json({
            message: 'Messages fetched successfully!',
            data: messages
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error occurred!',
            error: err
        });
    }
});

router.post('/save', async (req, res, next) => {
    const message = new Message({
        content: req.body.content
    });

    try {
        const messageSaved = await message.save();
        res.status(201).json({
            message: 'Message saved successfully!',
            data: messageSaved
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error occurred!',
            error: err
        });
    }
});

module.exports = router;