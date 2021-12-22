const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'databasen',
    multipleStatements: true

});
connection.connect((err) => {
    if (err){
        console.log(err)
    };
    console.log('Connected!');
});




let tasks = require('../data/tasks')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../test')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(tasks)
    })
}
// getAll = ()=>{
//     return new Promise((resolve,reject)=>{
//         let sql = "SELECT * FROM projects"
//         connection.query(sql,(err,result)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(result) 
//             }
//         })


//     })

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
        tasks[index] = {id, ... task}
        writeDataToFile('./data/tasks.json', tasks)
        resolve(tasks[index])
    })
}
function remove(id) {
    return new Promise((resolve, reject) => {
        tasks =  tasks.filter((p) => p.id !== id)
        writeDataToFile('./data/tasks.json', tasks)
        resolve()
    })
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}