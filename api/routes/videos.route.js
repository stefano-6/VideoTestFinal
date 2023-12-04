const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const videoService = require('../services/videos.service')

router.get('/all', auth.auth, getAll)
router.get('/single/:id', auth.auth, getSingle)
router.post('/upload', auth.auth, createVideo)

module.exports = router

function getAll(req, res, next) {
    videoService.getAllVideos(req.body)
        .then(videos => res.json(videos))
        .catch(next);
}

function getSingle(req, res, next) {
    videoService.getSingleVideo(Number(req.params.id))
        .then(video => res.json(video))
        .catch(next)
}

function createVideo(req, res, next) {
    videoService.uploadVideo(req.body)
        .then(video => res.json(video))
        .catch(next);
}