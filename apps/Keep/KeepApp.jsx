import { notesService } from './services/notes-service.js'
import { Search } from '../../cmps/Search.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { AddNote } from './cmps/AddNote.jsx'


export class KeepApp extends React.Component {
    state = {
        notes: null,
        // searchStr: '',
        filteredNotes: null
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
    // setSearchStr = (searchStr) => {
    //     this.setState({ searchStr });
    // }
    setFilteredNotes = (filteredNotes) => {
        this.setState({ filteredNotes });
    }
    render() {
        const { notes, searchStr, filteredNotes } = this.state;
        if (!notes) return <span>Loading...</span>;
        const pinnedNotes = notes.filter(note => note.isPinned === true);
        const unpinnedNotes = notes.filter(note => note.isPinned === false);
        return (
            <React.Fragment>
                <AddNote loadNotes={this.loadNotes} />
                <Search  currPage="keep" setSearchStr={this.setSearchStr} setFilteredNotes={this.setFilteredNotes} />
                {!filteredNotes && (
                    <section className="note-lists">
                        {pinnedNotes && <div className='pinned-notes'>
                            <h3><i className="fas fa-lock"></i> PINNED</h3>
                            <NoteList notes={pinnedNotes} loadNotes={this.loadNotes} />
                        </div>}
                        {unpinnedNotes && <div className='unpinned-notes'>
                            <h3><i className="fas fa-lock-open"></i> UNPINNED</h3>
                            <NoteList notes={unpinnedNotes} loadNotes={this.loadNotes} />
                        </div>}
                    </section>)}
                {filteredNotes && (
                    <section className="search-results">
                        <h3>SEARCH RESULTS</h3>
                        <NoteList notes={filteredNotes} loadNotes={this.loadNotes} />
                    </section>)}
            </React.Fragment>
        );
    }
}