const express = require('express');
const router = express.Router();

const Message = require('../model/message');
const auth = require("../middleware/auth");

router.get('/',auth, async (req, res, next) => {
    try {
        const messages = await Message.find().populate('user', 'name _id');
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

router.post('/save',auth, async (req, res, next) => {
    const message = new Message({
        content: req.body.content,
        user: req.body.userId
    });

    try {
        const messageSaved = await message.save();
        const messageResponse = await Message.findById(messageSaved._id).populate('user', 'name _id');
        res.status(201).json({
            message: 'Message saved successfully!',
            data: messageResponse
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error occurred!',
            error: err
        });
    }
});

module.exports = router;