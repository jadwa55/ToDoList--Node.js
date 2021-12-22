const Tasks = require('../models/tasksModel')

const { getPostData } = require('../test')

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
        const body = await getPostData(req)

        const { name,description } = JSON.parse(body)

        const task = {
            name,
            description
        }
        const newTask =  await Tasks.create(task)

        res.writeHead(201,{'Content-type': 'application/json' })
        return res.end(JSON.stringify(newTask))
   
    }catch (error) {
        console.log(error)
    }
} 



// @desc Update a task
// @route PUT / api/task/:id
async function updateTask(req, res, id){
    try{
        const task = await Tasks.findById(id)

        if(!task){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message: 'Task Not Found'}))
        } else {
            const body = await getPostData(req)

            const { name,description } = JSON.parse(body)

            const taskData = {
                name: name || task.name,
                description: description || task.description
            }
            const updTask =  await Tasks.update(id, taskData)

            res.writeHead(200,{'Content-type': 'application/json' })
            return res.end(JSON.stringify(updTask))
        }   
    }catch (error) {
        console.log(error)
    }
}





// @desc Delete single task
// @route DELETE /api/task /: id
async function deleteTask(req, res, id){
    try{
        const task = await Tasks.findById(id)

        if(!task) {
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message: 'Task Not Found'}))
        } else {
            await Tasks.remove(id)
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message: `Task ${id} removed` }))
        }       
    }catch (error) {
        console.log(error)
    }
}
   
module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}