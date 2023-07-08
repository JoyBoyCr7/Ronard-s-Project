const express = require('express')
const showModel = require('../models/shows')
const routes = express.Router()

routes.get("/shows", async(req, res)=>{

    const shows = await showModel.find({})
    res.render("index.ejs", {shows})
})

routes.get("/shows/new", (req, res)=>{
    res.render("new.ejs")
})

routes.delete("/shows/:id", (req, res)=>{
    res.send("welcome to fazoland")
})

routes.post("/shows", (req, res)=>{
    res.send("welcome to fazoland")
})

routes.get("/shows/:id", (req, res)=>{
    res.send("welcome to fazoland")
})

routes.get("/shows/:id/edit", (req, res)=>{
    res.send("welcome to fazoland")
})
routes.get("/shows/:id", (req, res)=>{
    res.send("welcome to fazoland")
})







module.exports = routes