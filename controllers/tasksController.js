const tasks = require('../models/tasksModel')

async function getTasks(req, res){
    try{
        const tasks = await Tasks.find()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(tasks))
    }catch (error) {
        console.log(error)
    }
}