import { notesService } from '../services/notes-service.js'

export class NoteText extends React.Component {
    state = {
        note: null,
        isEditMode: false
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    onEditMode = () => {
        this.setState({ isEditMode: true });
    }
    offEditMode = () => {
        this.setState({ isEditMode: false });
    }
    handleChange = (ev) => {
        const newText = ev.target.value;
        notesService.updateText(this.state.note.id, newText);
        this.props.loadNotes();
    }
    render() {
        const { note, isEditMode } = this.state;
        if (!note) return <p>Loading...</p>;
        if (!isEditMode) return <p onClick={() => { this.onEditMode() }}>{note.info.txt}</p>;
        return <div className="text-edit flex">
            <textarea name="editText" defaultValue={note.info.txt} onChange={(ev) => this.handleChange(ev)}></textarea>
            <div className="btn-update-text" onClick={() => { this.offEditMode() }}>V</div>
        </div>
    }
}