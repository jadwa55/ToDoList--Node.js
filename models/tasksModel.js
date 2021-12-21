const tasks = require('../data/tasks')

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


module.exports = {
    findAll,
    findById
}