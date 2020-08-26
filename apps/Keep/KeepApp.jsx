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
        return (
            <main>
                <h1>KEEP APP</h1>
                {!notes && <span>Loading...</span>}
                {notes && <NoteList notes={notes} />}
            </main>
        );
    }
}