var ExpressCassandra = require('express-cassandra');
const express = require('express');
const models = require('../db/conn');

var MyModel = models.loadSchema('meetups_by_city', {
    fields: {
        meetup_id: {
            type: "uuid",
            default: { "$db_function": "uuid()" }
        },
        meetup_title: "text",
        meetup_imageurl: "text",
        meetup_date: "text",
        meetup_city: "text",
        meetup_address: "text",
        meetup_description: "text",
        created: {
            type: "timestamp",
            default: { "$db_function": "toTimestamp(now())" }
        }
    },
    key: [["meetup_city"], "created"],
    clustering_order: { "created": "asc" },
});
MyModel.syncDB(function (err, result) {
    if (err) throw err;
});

module.exports = MyModel;