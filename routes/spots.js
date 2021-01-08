const express = require('express');
const { Spot, Review } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const spot = await Spot.findByPk(id, {include: Review }) //working code, but missing User model 
    
    // IN PROGRESS NESTED EAGER LOADING TO INCLUDE USERS THROUGH REVIEWS 
    // { include: Review },
    // {    
    //     include: [{ 
    //         model: Users,
    //         through: { 
    //             model: Review
    //         }
    //     }]
    // })
    
    // const spot = await Spot.findAll({ 
    //     where: {id: id},
    //     include: [{ 
    //         model: Review,
    //         include: [{ 
    //             model: User,
    //         }]
    //     }]
    // });

    res.render('spot', { title: `${spot.name}`, spot});
})

module.exports = router;
