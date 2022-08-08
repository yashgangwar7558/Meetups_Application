var ExpressCassandra = require('express-cassandra');
const express = require('express');
const router = express.Router();
const MyModel = require('../models/models');
const models = require('../db/conn');

router.post("/add-new-meetup", (req, res) => {
    let data = req.body
    console.log(data);
    if (data.title) {
        var instance = new models.instance.meetups_by_city({
            meetup_title: data.title,
            meetup_imageurl: data.imageurl,
            meetup_date: data.date,
            meetup_city: data.city,
            meetup_address: data.address,
            meetup_description: data.description
        });

        instance.save(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log('Yuppiie!');
            res.status(201).json({ message: "data added to table!" })
        });
        MyModel.syncDB(function (err, result) {
            if (err) throw err;
        });
    }
});

router.get("/cities/:city", (req, res) => {
    const city = req.params.city
    console.log(city);
    models.instance.meetups_by_city.find({ meetup_city: city }, { allow_filter: true, raw: true }, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        res.status(200).send(data)
    });
});

router.get("/cities", (req, res) => {
    models.instance.meetups_by_city.find({}, { select: ['meetup_city as city'], allow_filter: true, distinct: true }, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        res.status(200).send(data)
    });
});

router.delete("/:uuid/", (req, res) => {
    console.log(models.uuidFromString(req.params.uuid));
    models.instance.meetups_by_city.delete({ meetup_city: "NewYork", meetup_id: models.uuidFromString(req.params.uuid) },
        (err, data) => {
            if (err) {
                console.error(err)
                return;
            } else {
                console.log("The data was deleted")
                res.status(200).send(`Data was deleted ${req.params.uuid}`)
            }
        }
    )
});

module.exports = router;