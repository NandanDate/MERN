const router = require('express').Router();
const Exercises = require('../models/exercises.models');


router.route('/').get((req,res)=>{
    Exercises.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Erro:'+ err));
});


module.exports = router;