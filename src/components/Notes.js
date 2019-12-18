import React, { useState, useEffect } from 'react';
import '../App.css';
import noteService from '../services/notes';
import notes from '../services/notes';

const Note = ({ mynote, handleDelete, handleChange }) => {
    let textcolor = 'notimportant';
    if (mynote.important) {
        textcolor = "important";
    } else {
        textcolor = "notimportant";
    }
    return (
        <div>
        {mynote.Bandi}<br/>
        {mynote.Maa}<br/>
        {mynote.Kaupunki}<br/>
        {mynote.Paikka}<br/>
        <a Href = {mynote.Url}>linkki</a><br/>
        <img src={mynote.Pic}/><br/>
        {mynote.aika}<br/>
        <br/>
        </div>
    )
}

const Notes = ({ mynotes, setNotes }) => {
    const handleDelete = (e, id) => {
        e.stopPropagation();
        noteService.remove(id)
            .then(resp => setNotes(mynotes.filter(n => n.id !== id)))
    }
    const handleChange = (e, id) => {
        e.stopPropagation();
        const tempNote = mynotes.filter(n => n.id === id)[0];
        console.log(tempNote);
        noteService.update(id, { ...tempNote, important: !(tempNote.important) })
            .then(updateNote => setNotes(mynotes.map(n => {
                if (n.id === id) {
                    n = updateNote
                }
                return n;
            })))
    }
    return (
        <div className="part">
            <ul className="notes">
                {mynotes.map(note => <Note handleChange={handleChange} handleDelete={handleDelete} mynote={note} key={note.id} />)}
            </ul>
        </div>
    )
}
export default Notes;
