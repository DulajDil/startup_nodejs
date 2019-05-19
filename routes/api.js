const express = require('express');
const router = express.Router();
const Hitman = require('../models/hitman');


//get a list of hitman from db
router.get('/hitmans', function (req,res, next) {
    res.send({ type: 'GET' })
});

//add new
router.post('/hitmans', function (req,res, next) {
    Hitman.create(req.body)
        .then(function (hitman) {
            res.send(hitman);
        }).catch(next);
});
//update
router.put('/hitmans/:id', function (req,res) {
    Hitman.findByIdAndUpdate({_id: req.params.id},req.body).then(function () {
        Hitman.findOne({_id: req.params.id}).then(function (hitman) {
            res.send(hitman);
        });
    });
});

//delete
router.delete('/hitmans/:id', function (req,res) {
    Hitman.findByIdAndRemove({_id: req.params.id}).then(function (hitman) {
        res.send(hitman)
    });
});

module.exports = router;
