const http = require('http')
const { getTasks, getTask, createTask, updateTask } = require('./controllers/tasksController')

const server = http.createServer((req,res)=> {
    if(req.url === '/api/tasks' && req.method === 'GET'){
      getTasks(req, res)    
    } else if (req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === 'GET')
    {   const id = req.url.split('/')[3]
        getTask(req, res, id)
    } else if (req.url === '/api/tasks' && req.method === 'POST'){
        createTask(req, res)
      } else if (req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === 'PUT')
      { const id = req.url.split('/')[3]
        updateTask(req, res, id)
    }else{
      res.writeHead(404,{'Content-Type':'application/json'})
      res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT,() => console.log(`server running on port ${PORT}`))














































































































// const testing  = (name) => {
//     console.log(`hello ${name}`);
// }

// testing('Jadwa');
// testing('Salma');

// const http = require('http');
// const hostname = 'localhost';
// const port = 3001;
// const server = http.createServer((req, res) => {
//  console.log(req.headers);
//  res.statusCode = 200;
//  res.end('<html><body><h1>Salmaaaaaaaaa</h1></body></html>');
// })
// server.listen(port, hostname);




// const dbConnection = require("../dbConnection");
// const queries = require("../queries/queries");

// module.exports = class TodoDao {
//   async saveEntity(entity) {
//     let con = await dbConnection();
//     try {
//       await con.query("START TRANSACTION");
//       let savedTodo = await con.query(
//         queries.insert_todo,
//         [entity.title, entity.completed]
//       );
//       await con.query("COMMIT");
//       entity.id = savedTodo.insertId;
//       return entity;
//     } catch (ex) {
//       await con.query("ROLLBACK");
//       console.log(ex);
//       throw ex;
//     } finally {
//       await con.release();
//       await con.destroy();
//     }
//   }

//   async updateEntity(entity) {
//     let con = await dbConnection();
//     try {
//       await con.query("START TRANSACTION");
//       await con.query(queries.update_todo, [
//         entity.title,
//         entity.completed,
//         entity.id
//       ]);
//       await con.query("COMMIT");
//       return true;
//     } catch (ex) {
//       await con.query("ROLLBACK");
//       console.log(ex);
//       throw ex;
//     } finally {
//       await con.release();
//       await con.destroy();
//     }
//   }

//   async deleteEntity(id) {
//     let con = await dbConnection();
//     try {
//       await con.query("START TRANSACTION");
//       await con.query(queries.delete_todo, [id]);
//       await con.query("COMMIT");
//       return true;
//     } catch (ex) {
//       await con.query("ROLLBACK");
//       console.log(ex);
//       throw ex;
//     } finally {
//       await con.release();
//       await con.destroy();
//     }
//   }

//   async readEntities() {
//     let con = await dbConnection();
//     try {
//       await con.query("START TRANSACTION");
//       let todo = await con.query(queries.read_todo);
//       await con.query("COMMIT");
//       todo = JSON.parse(JSON.stringify(todo));
//       return todo;
//     } catch (ex) {
//       console.log(ex);
//       throw ex;
//     } finally {
//       await con.release();
//       await con.destroy();
//     }
//   }
// }; 






