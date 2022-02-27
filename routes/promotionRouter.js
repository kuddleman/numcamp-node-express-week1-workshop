const express = require('express')
const promotionRouter = express.Router()

promotionRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req, res) => {
    res.end('Will send all promotions to you')
})
.post((req, res) => {
    res.end(`Will add this promotion: ${req.body.name} 
    with this description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation is not supported on /promotions')
})
.delete((req, res) => {
    res.end('Deleting all promotions')
})

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req, res) => {
    res.end(`Will send details of promotion ${req.params.promotionId} to you.`)
})
.post((req, res) => {
    res.end(`POST operation is not supported on /promotions/${req.params.promotionId}`)
})
.put((req, res) => {
    res.write(`Now updating this promotion: ${req.params.promotionId}\n`)
    res.end(`We have updated this promotion: ${req.body.name}; with this info: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleted promotion: ${req.params.promotionId}`)
})


module.exports = promotionRouter