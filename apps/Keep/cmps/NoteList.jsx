import { Note } from './Note.jsx'

export class NoteList extends React.Component {
    render() {
        const { notes, loadNotes } = this.props;
        return (
            <ul className="note-list">
                {notes.map(note => <Note key={note.id} note={note} loadNotes={loadNotes} />)}
            </ul>
        );
    }
}