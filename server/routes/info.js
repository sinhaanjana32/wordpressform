const express = require('express');
const router = express.Router();
const { Info } = require("../models/Info");



router.post("/uploadInfo", (req, res) => {
console.log(req.body)
    //save all the data we got from the client into the DB 
    const info = new Info(req.body)
    console.log(info)

    info.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});
