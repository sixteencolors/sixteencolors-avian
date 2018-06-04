"use strict"

let artpacks = require("express").Router()

artpacks.get("/test", (req, res) => {
    res.json({success: true})
})

artpacks.get("/test2", (req, res) => {
    res.json({success: true})
})

module.exports = artpacks
