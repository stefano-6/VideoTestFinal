const express = require('express')
const router = express.Router()
const userService = require('../services/users.service')

router.post('/auth', authenticateUser)

module.exports = router

function authenticateUser(req, res, next) {
    userService.auth(req.body)
        .then(user => res.json(user))
        .catch(next);
}