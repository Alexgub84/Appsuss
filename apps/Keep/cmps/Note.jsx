import { NoteTitle } from './NoteTitle.jsx'
import { NoteText } from './NoteText.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteImg } from './NoteImg.jsx'
import { Pallet } from './Pallet.jsx'
import { notesService } from '../services/notes-service.js'

export class Note extends React.Component {
    state = {
        isMouseOver: false,
        isPalletShown: false
    }
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
        }
    }
    onTogglePin = (noteId) => {
        notesService.togglePin(noteId);
        this.props.loadNotes();
    }
    onTogglePallet = () => {
        const { isPalletShown } = this.state;
        this.setState({ isPalletShown: !isPalletShown });
    }
    onMouseOver = () => {
        this.setState({ isMouseOver: true });
    }
    onMouseOut = () => {
        this.setState({ isMouseOver: false });
    }
    onRemoveNote = (noteId) => {
        notesService.removeNote(noteId);
        this.props.loadNotes();
    }
    onUpdateColor = (color) => {
        let newStyle = { backgroundColor: color };
        if (['red', 'blue', 'green', 'dark-blue'].includes(color)) {
            newStyle.color = '#f6f5f5';
        }
        notesService.updateStyle(this.props.note.id, newStyle);
        this.props.loadNotes();
    }
    render() {
        const { note } = this.props;
        const { isMouseOver, isPalletShown } = this.state;
        const pinText = (note.isPinned) ? <i className="fas fa-lock-open"></i> : <i className="fas fa-lock"></i>;
        const btnContainerClassStr = (isMouseOver) ? "note-btns-container" : "note-btns-container invisible";
        return (<li><div className={`note note-${note.id}`} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={note.style}>
            <div className={btnContainerClassStr}>
                <span className="btn-note-to-mail" onClick={() => { this.onRemoveNote(note.id) }}>
                    <a href={`#/mail/compose/${note.id}`}><i class="fas fa-envelope-open-text"></i></a>
                </span>
                <span className="btn-toggle-pallet" onClick={this.onTogglePallet}>
                    <i className="fas fa-palette"></i>
                </span>
                <span className="btn-toggle-pin" onClick={() => { this.onTogglePin(note.id) }}>
                    {pinText}
                </span>
                <span className="btn-remove-note" onClick={() => { this.onRemoveNote(note.id) }}>
                    <i className="fas fa-times"></i>
                </span>
            </div>
            <NoteTitle id={note.id} title={note.title} onEditTitle={this.onEditTitle} loadNotes={this.props.loadNotes} />
            {this.DynamicCmp(note)}
            <Pallet isShown={isPalletShown} onUpdateColor={this.onUpdateColor} />
        </div></li>);
    }
}


