import React, { useState, useEffect} from 'react';
import './App.css';
import noteService from './services/notes';
import Notes from './components/Notes';
import NewNote from './components/NewNote';

const App = () => {
  console.log("kissa");
  const [notes, setNotes] = useState([]);
 const [newNote, setNewNote] = useState("");
  const [newImportance, setNewImportance] = useState(false);


  const getNotes = () => {
    noteService
      .getAll()
      .then(allNotes => {
        setNotes(allNotes);
      })
  };

  useEffect(getNotes, []);
  const addNote = event => {
    const now = new Date();
    event.preventDefault();
    const testNote = {
      content: newNote,
      date: now.toISOString(),
      important: newImportance
    };
    noteService.add(testNote)
      .then(note => {
        let tempNotes = notes.concat(note);
        setNotes(tempNotes);
        setNewNote("");
        setNewImportance("false");
      })
  }

  return (
    <div className="App">
      <header>

        <NewNote submitHandler={addNote} newNote={newNote} setNewNote={setNewNote} newImportance={newImportance} setNewImportance={setNewImportance} />
   
        <Notes mynotes={notes} setNotes={setNotes} />
      </header>
    </div>
  );
  }

export default App;
