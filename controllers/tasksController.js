const Tasks = require('../models/tasksModel')

// @desc Gets All products
// @route GET /api/products 
async function getTasks(req, res){
    try{
        const tasks = await Tasks.findAll()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(tasks))
    }catch (error) {
        console.log(error)
    }
}

// @desc Gets single task
// @route GET /api/task /: id
async function getTask(req, res, id){
    try{
        const task = await Tasks.findById(id)

        if(!task) {
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message: 'Task Not Found'}))
        } else {
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(task))
        }       
    }catch (error) {
        console.log(error)
    }
}



// @desc Create a task
// @route Post / api/task
async function createTask(req, res){
    try{
        const task = {
            title: 'JADWA',
            description: 'just testing',
        }
        const newTask = Tasks.create(task)

        res.writeHead(200,{'Content-type': 'application/json' })
        return res.end(json.stringify(newTask))
    }catch (error) {
        console.log(error)
    }
}

   
module.exports = {
    getTasks,
    getTask,
    createTask
}