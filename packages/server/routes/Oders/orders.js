var express = require('express');
var router = express.Router();
var admin = require('./../../db');



/* Update order listing based on order id. */

router.put('/:orderId', (req, res) => {
    const db = admin.database();
    const ref = db.ref("orders/" + req.params.orderId);
    const testObj = req.body;

    ref.update(testObj, (error) => {
        if (error) {
            res.send('Unable to save data');
        } else {
            res.send('data upadted')
        }
    })
})

/* Add order in orders listing  */

router.post('/', (req, res) => {
    const db = admin.database();
    const ref = db.ref("orders");
    console.log(req.body);
    const testObj = req.body;

    ref.push(testObj, (error) => {
        if (error) {

            res.send(`Unable to save data`);
        } else {
            res.send(`data added`)
        }
    })
});

/* GET orders listing. */

router.get('/', (req, res) => {
    const db = admin.database();
    const ref = db.ref("orders");
    ref.on("value", function (snapshot) {
        res.json(snapshot);
    }, (err) => {
        console.log('error happening');
        res.send('Unable to get data');
    });
})



module.exports = router;
