import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './component/Task/Task';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const api_endpoint = import.meta.env.VITE_API_URL;
  const [note, setNote] = useState({
    Heading: "",
    content: "",
    timestamp: "",
  });

  const getTasks = () => {
    axios.get(`${api_endpoint}/tasks`)  
      .then((response) => {
        setNotes(response.data); 
      })
      .catch((error) => {
        console.error('There was an error fetching tasks!', error);
      });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const newNote = { ...note, timestamp: new Date().toISOString() };

    axios.post(`${api_endpoint}/tasks`, newNote)  
      .then((response) => {
        setNotes((prevData) => [newNote, ...prevData]);
        setNote({Heading: "",
          content: "",
          timestamp: "",
        });
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  const deleteTask = (id) => {
    axios.delete(`${api_endpoint}/tasks/${id}`)
      .then((response) => {
        setNotes(notes.filter(task => task.Id !== id));
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };


  useEffect(() => {
    getTasks();
    console.log(notes);
  }, []);

  return (
    <div className='container'>
      <div className='heading'>
        <span> ≡ Notes</span>
      </div>
      <div className='body'>
        <div className='upper'>
          <form onSubmit={onsubmit}>
            <input
              type='text'
              placeholder='Take a note...'
              value={note.Heading}
              onChange={(e) => setNote((note) => ({ ...note, Heading: e.target.value }))}
            />
            <input
              type='text'
              placeholder='Enter the content'
              value={note.content}
              onChange={(e) => setNote((note) => ({ ...note, content: e.target.value }))}
            />
            <button type='submit'>Add Note</button>
          </form>
        </div>
        <div className='lower'>
          {notes.map((item) => (
            <span className='item' key={item.Id}> 
              <Task data={item} />
              <button onClick={() => deleteTask(item.Id)}>Delete</button>  
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
