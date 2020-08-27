import { notesService } from './services/notes-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { AddNote } from './cmps/AddNote.jsx';


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
        const pinnedNotes = notes.filter(note => note.isPinned === true);
        const unpinnedNotes = notes.filter(note => note.isPinned === false);
        return (
            <main>
                <h1>KEEP APP</h1>
                <AddNote loadNotes={this.loadNotes} />
                {pinnedNotes && <div className='pinned-notes'>
                    <h3><i class="fas fa-lock"></i> PINNED</h3>
                    <NoteList notes={pinnedNotes} loadNotes={this.loadNotes} />
                </div>}
                {unpinnedNotes && <div className='unpinned-notes'>
                    <h3><i class="fas fa-lock-open"></i> UNPINNED</h3>
                    <NoteList notes={unpinnedNotes} loadNotes={this.loadNotes} />
                </div>}
            </main>
        );
    }
}