const Artists = require('../models/artists');

const errorHandle = (err, res) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}
exports.all = (req, res) => {
    Artists.all(
        (err, docs) => {
            errorHandle(err, res);
            res.send(docs);
        })
}

exports.findById = (req, res) => {
    Artists.findById(
        req.params.id, 
        (err, doc) => {
            errorHandle(err, res);
            res.send(doc);
        })
}

exports.create = (req, res) => {

    let artist = {
        name: req.body.name
    };

    Artists.create(
        artist, 
        (err, result) => {
            errorHandle(err, res);
            res.sendStatus(200);
        })
}

exports.update = (req, res) => {
    Artists.update(
        req.params.id, 
        { name: req.body.name}, 
        (err, result) => {
            errorHandle(err, res);
            res.sendStatus(200);
        })
}

exports.delete = (req, res) => {
    Artists.delete(
        req.params.id, 
        (err, result) => {
            errorHandle(err, res);
            res.sendStatus(200);
        })
}