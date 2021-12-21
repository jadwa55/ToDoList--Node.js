const tasks = require('../data/tasks')

function find() {
    return new Promise((resolve, reject) => {
        resolve(tasks)
    })
}

module.exports = {
    find
}