let tasks = require('../data/tasks')
const { v4: uuidv4 } = require('uuid')
// const mysql = require('mysql')

const { writeDataToFile } = require('../test')


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'databasen',
//     multipleStatements: true

// });
// connection.connect((err) => {
//     if (err){
//         console.log(err)
//     };
//     console.log('Connected!');
// });


// function findAll() {
//     return new Promise((resolve, reject) => {
//         let sql = "SELECT * FROM tasks"
//         connection.query(sql,(err,result)=>{
//                         if(err){
//                             reject(err)
//                         }else{
//                             resolve(result) 
//                         }
//                     })
//         // resolve(tasks)
//     })
// }

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

// function create (name,description){

//         return new Promise((resolve,reject)=>{
//             let sql = `INSERT INTO tasks(name,description) VALUES("${name}","${description}")`
//             let create = connection.query(sql,(err,result)=>{
//                 if(err){
//                     reject(err)
//                 }
//                 resolve(result)
//                 })                 
//         })

// }

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