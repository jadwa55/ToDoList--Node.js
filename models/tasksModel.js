const tasks = require('../data/tasks')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(tasks)
    })
}

module.exports = {
    findAll
}