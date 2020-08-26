import { notesService } from '../services/notes-service.js'

export class NoteTitle extends React.Component {
    state = {
        title: null,
        isEditMode: false
    }
    componentDidMount() {
        const {title}=this.props;
        this.setState({title});
    }
    handleChange = (ev) => {
        const newTitle = ev.target.value;
        notesService.updateTitle(this.props.id, newTitle);
        this.props.loadNotes();
    }
    onEditMode = () => {
        this.setState({ isEditMode: true });
    }
    offEditMode = () => {
        this.setState({ isEditMode: false });
    }
    render() {
        const { title } = this.props;
        const { isEditMode } = this.state;
        if (!isEditMode) return <h4 className="note-title" onClick={() => { this.onEditMode() }}>{title}</h4>;
        return <div className="title-edit flex">
            <textarea name="editTitle" defaultValue={title} onChange={(ev) => this.handleChange(ev)}></textarea>
            <div className="btn-update-title" onClick={() => { this.offEditMode() }}>V</div>
        </div>
    }
}