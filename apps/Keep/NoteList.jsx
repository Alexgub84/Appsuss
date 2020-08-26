import { Note } from './Note.jsx'

export class NoteList extends React.Component {
    render() {
        const { notes } = this.props;
        return (
            <ul>
                {notes.map(note => <Note key={note.id} note={note} />)}
            </ul>
        );
    }
}