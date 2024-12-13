const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("helloworld")
})

app.post('/tasks', (req, res) => {
    const { Heading, content } = req.body;
    const query = 'INSERT INTO Tasks (Heading, content) VALUES (?, ?)';
    connection.query(query, [Heading, content], (err, result) => {
      if (err) {
        console.error('Error inserting task:', err);
        return res.status(500).send('Error creating task');
      }
      res.status(201).send({ message: 'Task created successfully', taskId: result.insertId });
    });
  });
  
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Tasks WHERE Id = ?';
    connection.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error deleting task:', err);
        return res.status(500).send('Error deleting task');
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Task not found');
      }
  
      res.send({ message: 'Task deleted successfully' });
    });
  });
  
  app.get('/tasks', (req, res) => {
    // Select all tasks from the Tasks table
    const query = 'SELECT * FROM Tasks ORDER BY timestamp DESC';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching tasks:', err);
        return res.status(500).send('Error fetching tasks');
      }
  
      res.json(results);  // Send the list of tasks as a JSON response
    });
  });
  
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})