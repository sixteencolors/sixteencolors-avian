"use strict"

let index = require("express").Router()

index.get("/test", (req, res) => {
    res.json({success: true})
})

index.get("/test2", (req, res) => {
    res.json({success: true})
})

module.exports = index
