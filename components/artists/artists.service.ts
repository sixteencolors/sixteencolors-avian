"use strict"

let artists = require("express").Router()

artists.get("/test", (req, res) => {
    res.json({success: true})
})

artists.get("/test2", (req, res) => {
    res.json({success: true})
})

module.exports = artists
