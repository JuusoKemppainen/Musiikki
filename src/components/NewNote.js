import React from 'react';
import '../App.css';

const NewNote = ({setNewPic,newPic,setNewUrl,newUrl,setNewBandi,newBandi,setNewAika,newAika,setNewPaikka,newPaikka,newKaupunki,setNewKaupunki, newimportance,setNewImportance,submitHandler,newMaa,setNewMaa}) => {
return(
    <div>
        <form onSubmit={e => submitHandler(e)}>
    Maa <input type="text" onChange = {e => setNewMaa(e.target.value)} value={newMaa}/>
    <br/>
    Kaupunki <input type="text" onChange = {e => setNewKaupunki(e.target.value)} value={newKaupunki}/>
    <br/>
    Paikka<input type="text" onChange = {e => setNewPaikka(e.target.value)} value={newPaikka}/>
    <br/>
    Aika<input type="text" onChange = {e => setNewAika(e.target.value)} value={newAika}/>
    <br/>
    Bandi<input type="text" onChange = {e => setNewBandi(e.target.value)} value={newBandi}/>
    <br/>
    Url<input type="text" onChange = {e => setNewUrl(e.target.value)} value={newUrl}/>
    <br/>
    Pic<input type="text" onChange = {e => setNewPic(e.target.value)} value={newPic}/>
    <br/>
    tärkeä:
    <input onChange={e=> setNewImportance(e.target.checked)} checked = {newimportance} type="checkbox"/>
    <input type="submit"></input>
    </form>
    </div>
)
}
export default NewNote;