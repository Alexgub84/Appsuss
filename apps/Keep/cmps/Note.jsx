import { NoteTitle } from './NoteTitle.jsx'
import { NoteText } from './NoteText.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteImg } from './NoteImg.jsx'
import { notesService } from '../services/notes-service.js'

export class Note extends React.Component {
    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            case 'NoteTodos':
                return <NoteTodos note={note} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            case 'NoteVideo':
                return <NoteVideo note={note} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            case 'NoteImg':
                return <NoteImg note={note} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            // default:
            //     return //...some default error view
        }
    }
    onTogglePin = (noteId) => {
        notesService.togglePin(noteId);
        this.props.loadNotes();
    }
    render() {
        const { note } = this.props;
        const pinText = (note.isPinned) ? 'unpin' : 'pin';
        return (<li><div className={`note note=${note.id}`}>
            <div className="note-btns-container">
                <span className="btn-toggle-pin" onClick={() => { this.onTogglePin(note.id) }}>
                    {pinText}
                </span>
                <span className="btn-remove-note">X</span>
            </div>
            <NoteTitle id={note.id} title={note.title} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            {this.DynamicCmp(note)}
        </div></li>);
    }
}


