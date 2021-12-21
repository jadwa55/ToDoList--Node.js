const tasks = require('../data/tasks')
const { v4: uuidv4 } = require('uuid')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(tasks)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const task = tasks.find((p) => p.id === id)
        resolve(task)
    })
}

function create(task) {
    return new Promise((resolve, reject) => {
        const newTask = {id: uuidv4(), ...task}
        tasks.push(newTask)
    })
}
module.exports = {
    findAll,
    findById
}