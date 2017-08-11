const express = require('express');
const router = express.Router();

router.route('/books')
    .get((req, res)=>{
        res.send('stuff');
    })
    .post((req, res)=>{
        res.send('stuff');
    })
    .put((req, res)=>{
        res.send('stuff');
    })
    .delete((req, res)=>{
        res.send('stuff');
    })
module.exports = router;