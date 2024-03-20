export default function Note({note,deleteFunction,noteId}){
    return (
        <div className="note">
            <p>{note}</p>
            <div className="delete" onClick={() => deleteFunction(noteId)}>Del</div>
        </div>
    );
};