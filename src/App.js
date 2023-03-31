import { useState } from "react";

import Createnote from "./components/createnote/Createnote";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Note from "./components/note/Note";
import notes from "./notes";
// console.log(notes);  
function createnote(element){
  return <Note key = {element.key} title = {element.title} content = {element.content}/>
}

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header/>
      <Createnote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer/>
    </div>
  );
}

export default App;
