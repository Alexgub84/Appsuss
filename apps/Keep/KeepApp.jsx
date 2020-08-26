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
<<<<<<< HEAD
              <h1>Keep APP</h1>
            </main>
        )
=======
                <h1>KEEP APP</h1>
                {!notes && <span>Loading...</span>}
                {notes && <NoteList notes={notes} />}
            </main>
        );
>>>>>>> be12490340dde048c8c53389460493df5d41b325
    }
}