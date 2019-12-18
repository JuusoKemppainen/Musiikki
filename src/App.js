import React, { useState, useEffect} from 'react';
import './App.css';
import noteService from './services/notes';
import Notes from './components/Notes';
import NewNote from './components/NewNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [newBandi, setNewBandi] = useState("");
  const [newMaa, setNewMaa] = useState("");
  const [newKaupunki, setNewKaupunki] = useState("");
  const [newPaikka, setNewPaikka] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newPic, setNewPic] = useState("");
  const [newAika, setNewAika] = useState("");
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
    event.preventDefault();
    const testNote = {
      Bandi: newBandi,
      Maa: newMaa,
      Kaupunki: newKaupunki,
      Paikka: newPaikka,
      Url: newUrl,
      Pic: newPic,
      aika:newAika
    };
    noteService.add(testNote)
      .then(note => {
        let tempNotes = notes.concat(note);
        setNotes(tempNotes);
        setNewBandi("");
        setNewMaa("");
        setNewKaupunki("");
        setNewPaikka("");
        setNewUrl("");
        setNewPic("");
        setNewAika("");
        setNewImportance("false");
      })
  }

  return (
    <div className="App">
      <header>
      


        <NewNote submitHandler={addNote} newBandi={newBandi} setNewBandi={setNewBandi} newImportance={newImportance} setNewImportance={setNewImportance}  newMaa={newMaa} setNewMaa={setNewMaa}
        newKaupunki = {newKaupunki} setNewKaupunki = {setNewKaupunki} newPaikka={newPaikka} setNewPaikka ={setNewPaikka} newUrl = {newUrl} setNewUrl = {setNewUrl} newPic = {newPic} setNewPic = {setNewPic}
        newAika = {newAika} setNewAika = {setNewAika}/>
        <Notes mynotes={notes} setNotes={setNotes} />

      </header>
    </div>
  );
  }

export default App;