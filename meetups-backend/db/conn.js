var ExpressCassandra = require('express-cassandra');
// import { uuidFromString } from "express-cassandra"
// const cassandra = require('cassandra-driver');
const express = require('express');

var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],   // 127.0.0.1
        localDataCenter: 'datacenter1',
        protocolOptions: { port: 9042 },
        keyspace: 'testks',
        queryOptions: { consistency: ExpressCassandra.consistencies.one }
        // socketOptions: { readTimeout: 60000 },
        // authProvider: new cassandra.auth.PlainTextAuthProvider('dok-k8ssandra-superuser', 'ZglH3dt8jU2YzoetgXzR')
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
},
    (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Database successfully connected at port 9042")
        }
    }
);

module.exports = models;