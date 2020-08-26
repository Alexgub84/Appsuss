import { notesService } from './services/notes-service.js'
import { NoteList } from './NoteList.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: null
    }
    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        notesService.getAllNotes()
            .then(notes => {
                this.setState({ notes });
            });
    }
    render() {
        const { notes } = this.state;
        if (!notes) return <span>Loading...</span>;
        const pinneNotes = notes.filter(note => note.isPinned === true);
        const unpinnedNotes = notes.filter(note => note.isPinned === false);
        return (
            <main>
                <h1>KEEP APP</h1>
                {notes && <NoteList notes={pinneNotes} />}
                {notes && <NoteList notes={unpinnedNotes} />}
            </main>
        );
    }
}