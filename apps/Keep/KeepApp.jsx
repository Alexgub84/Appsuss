import { notesService } from './services/notes-service.js'
import { NoteList } from './cmps/NoteList.jsx'

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
    onAddNote = (noteType) => {
        let info;
        switch (noteType) {
            case 'NoteText':
                info = { txt: 'Text...' };
                break;
            case 'NoteImg':
                info = { url: 'URL...' };
                break;
            case 'NoteTodos':
                info = { todos: [{ txt: 'To do...', doneAt: null }] };
                break;
            case 'NoteVideo':
                info = {};
                break;

        }
        const newNote = {
            id: makeId(),
            type: noteType,
            title: 'Title...',
            isPinned: false,
            info,
            style: {
                backgroundColor: '#aaaaaa'
            }
        }
        notesService.addNote(newNote);
        this.loadNotes();
    }
    render() {
        const { notes } = this.state;
        if (!notes) return <span>Loading...</span>;
        const pinnedNotes = notes.filter(note => note.isPinned === true);
        const unpinnedNotes = notes.filter(note => note.isPinned === false);
        return (
            <main>
                <h1>KEEP APP</h1>
                <div className='addNote'>
                    <span className='btn-add-note' onClick={() => { this.onAddNote('NoteText') }}>text</span>
                    <span className='btn-add-note' onClick={() => { this.onAddNote('NoteImg') }}>img</span>
                    <span className='btn-add-note' onClick={() => { this.onAddNote('NoteTodos') }}>todos</span>
                    <span className='btn-add-note' onClick={() => { this.onAddNote('NoteVideo') }}> video</span>
                </div>
                {pinnedNotes && <div className='pinned-notes'>
                    <h3>PINNED</h3>
                    <NoteList notes={pinnedNotes} loadNotes={this.loadNotes} />
                </div>}
                {unpinnedNotes && <div className='unpinned-notes'>
                    <h3>UNPINNED</h3>
                    <NoteList notes={unpinnedNotes} loadNotes={this.loadNotes} />
                </div>}
            </main>
        );
    }
}