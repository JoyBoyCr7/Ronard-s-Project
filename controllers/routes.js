const express = require('express')
const showModel = require('../models/shows')
const routes = express.Router()

routes.get("/shows", async(req, res)=>{
    const shows = await showModel.find({})
    shows.forEach(elemont =>{
        console.log(elemont._id)
    })
    res.render("index.ejs", {shows})
})

routes.get("/shows/new", (req, res)=>{
    res.render("new.ejs")
})

routes.delete("/shows/:id", async(req, res)=>{
    const id = req.params.id
    await showModel.findByIdAndDelete(id)
    res.redirect("/shows")
})

routes.put("/shows/:id", async(req, res)=>{
    const id = req.params.id
    const showName = req.body.showName
    req.body.wouldRecommend = req.body.wouldRecommend === "on" ? true:false
    console.log(showName)
    await showModel.findByIdAndUpdate(id,{
        showName: req.body.showName,
        yearCompleted: req.body.yearCompleted,
        Rating: req.body.Rating,
        wouldRecommend: req.body.wouldRecommend,
    })
    res.redirect("/shows")

})

routes.post("/shows", async(req, res)=>{
    console.log(req.body)
    req.body.wouldRecommend = req.body.wouldRecommend === "on" ? true : false
    await showModel.create(req.body)
    res.redirect("/shows")
    
})

routes.get("/shows/:id/edit", async(req, res)=>{
    const show = await showModel.findById(req.params.id)
    res.render("edit.ejs", {show})
})

routes.get("/shows/:id", async(req, res)=>{
    const id = req.params.id
    const show = await showModel.findById(id)
    res.render("show.ejs", {show, id})
})







module.exports = routes