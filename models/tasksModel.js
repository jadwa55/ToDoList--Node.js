const tasks = require('../data/tasks')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../test')

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
        writeDataToFile('./data/tasks.json', tasks)
        resolve(newTask)
    })
}

function update(id, task) {
    return new Promise((resolve, reject) => {
        const index = tasks.findIndex((p) => p.id === id)
        tasks[index] = {id, ... tasks}
        writeDataToFile('./data/tasks.json', tasks)
        resolve(tasks[index])
    })
}


module.exports = {
    findAll,
    findById,
    create,
    update
}