const express = require('express');
const router = express.Router();

router.use('/:anything', (req, res, next) => {
    console.log(req.method + " /" + req.params.anything)
    console.log(res.status)
    next();
})

router.use('/special/', (req, res, next) => {
    console.log("You're SUPER special today!");
    next();
})

module.exports = router;