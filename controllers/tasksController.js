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

// @desc Gets single product
// @route GET /api/product /: id
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

   
module.exports = {
    getTasks,
    getTask
}