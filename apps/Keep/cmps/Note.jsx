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
                return <NoteText note={note} onEditTitle={this.onEditTitle} />
            case 'NoteTodos':
                return <NoteTodos note={note} onEditTitle={this.onEditTitle} />
            case 'NoteVideo':
                return <NoteVideo note={note} onEditTitle={this.onEditTitle} />
            case 'NoteImg':
                return <NoteImg note={note} onEditTitle={this.onEditTitle} />
            // default:
            //     return //...some default error view
        }
    }
    onTogglePin = (noteId) => {
        console.log('togglePin');
        notesService.togglePin(noteId);
    }
    render() {
        const { note } = this.props;
        const pinText = (note.isPinned) ? 'unpin' : 'pin';
        return (<li><div className={`note note=${note.id}`}>
            <div className="btn-toggle-pin" onClick={() => { this.onTogglePin(note.id) }}>{pinText}</div>
            <NoteTitle id={note.id} title={note.title} onEditTitle={this.onEditTitle} />
            {this.DynamicCmp(note)}
        </div></li>);
    }
}


