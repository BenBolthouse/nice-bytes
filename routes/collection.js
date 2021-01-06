const express = require('express');
const { Collection } = require('../db/models');

const router = express.Router();

router.get('/wantToVisit', async (req, res) => {
    if(req.session.auth) {
        const userId = req.session.auth.userId;
        const collection = await Collection.findAll({ where: {  userId: userId,  name: 'Want to Visit' } })
        res.render('collection', { collection });
    } else {
        res.redirect('/');
    }
})

    router.get('/haveVisited', async (req, res) => {
    if(req.session.auth) {
        const userId = req.session.auth.userId;
        const collection = await Collection.findAll({ where: {  userId: userId,  name: 'Have Visited' } })
        res.render('collection', { collection });
    } else {
        res.redirect('/');
    }
})
module.exports = router;
