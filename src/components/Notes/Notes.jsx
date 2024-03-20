import './Notes.css';
import Note from './Note';
import { useState } from 'react';

export default function Notes() {

    const [colorValue, setColorValue] = useState(true);

    const [inputValue, setInputValue] = useState('');

    const [notesArray, setNotesArray] = useState([]);

    function addNote() {
        if (inputValue !== '') {
            setNotesArray([...notesArray, inputValue]);   
        } else {
            alert("Note cannot be empty");
        }
    };

    function deleteNote(id) {
        setNotesArray(notesArray.filter((item) => item !== notesArray[id]));
    }

    return (
        <div id="Notes">
            <div id="notesInput">
                <input type="text" placeholder='Enter your note' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <div id="add_btn" onClick={() => { addNote(); setInputValue('') }}>Add</div>
            </div>

            <div id="notesOutput">


                {
                    notesArray.length !== 0
                    ?
                    notesArray.map((item,index) => {
                        return <Note note={item} key={index} noteId={index} deleteFunction={deleteNote} />
                    })
                        :
                        <p style={{
                            color: colorValue ? "red" : "white"
                        }}>Notes are Empty</p>
                }

            </div>
        </div>
    )
}