"use strict"

let groups = require("express").Router()

groups.get("/test", (req, res) => {
    res.json({success: true})
})

groups.get("/test2", (req, res) => {
    res.json({success: true})
})

module.exports = groups
