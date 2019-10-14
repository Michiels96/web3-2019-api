/**
 * Load modules
 */

const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('../routes/users')
const galleryRouter = require('../routes/gallery')

const quotesRouter = require('../routes/quotes')


/**
 * Variables
 */

// Global variables
const host = process.env.SERVER_HOST
const port = process.env.PORT
const app = express()



/**
 * Configuration
 */

// Configure server
app.use(bodyParser.json());

// Configure routes
app.use('/users', usersRouter)
app.use('/gallery', galleryRouter)
app.use('/quotes', quotesRouter)

// Start server
var start = function (callback) {
    app.listen(port,  () => {
        //console.info(`[Server] Listening on http://${host}:${port}`);
        console.info(`[Server] Listening on ${port}`)
        if (callback) callback(null)
    })
};



/**
 * Exports
 */
exports.start = start