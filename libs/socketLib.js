const express = require('express')
const events = require('events')
const eventEmitter = new events.EventEmitter() //new eventEmitter instance
const socketio = require('socket.io')
const shortid = require('shortid')
const response = require('./response')
const logger = require('./loggerLib')
const mongoose = require('mongoose')
const tokenLib = require('./tokenLib')
const check = require('./checkLib')

//here server is http server initialized in app.js
let setServer = (server) => {

    //socket initialization
    let io = socketio.listen(server)
    let myIo = io.of('') //no namespace

    //main event handler,inside this series of events can be handled
    myIo.on('connection', (socket) => {
    }) //end main socket 'connection
} //end setServer


module.exports = {
    setServer: setServer
}