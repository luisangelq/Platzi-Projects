const Lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const Memory = require('lowdb/adapters/Memory')

const json = require('./db.json')
const isLocal = !process.env.NOW_REGION
const type = isLocal ? new FileSync('./db.json') : new Memory

const db = Lowdb(type)
db.defaults(json).write()

module.exports = db
