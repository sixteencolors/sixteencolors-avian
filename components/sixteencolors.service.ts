"use strict"

let sixteencolors = require("express").Router()

sixteencolors.get("/test", (req, res) => {
    res.json({success: true})
})

sixteencolors.get("/test2", (req, res) => {
    res.json({success: true})
})

module.exports = sixteencolors
