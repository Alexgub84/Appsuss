
import { notesService } from '../services/notes-service.js'


export class AddNote extends React.Component {
    state = {
        noteTypes: [
            { type: 'NoteText', placeholder: 'What\'s on your mind?', btnTxt: <i className="far fa-file-alt"></i> },
            { type: 'NoteImg', placeholder: 'Enter image\'s URL...', btnTxt: <i className="far fa-image"></i> },
            { type: 'NoteVideo', placeholder: 'Enter video\'s URL...', btnTxt: <i className="fab fa-youtube"></i> },
            { type: 'NoteTodos', placeholder: 'Enter comma seperated list...', btnTxt: <i className="far fa-check-square"></i> }
        ],
        currNoteType: 0,
        inputValue: ''
    }
    setNoteType = (currNoteType) => {
        this.setState({ currNoteType, inputValue: '' });
    }
    setValue = (inputValue) => {
        this.setState({ inputValue });
    }
    onAddNote = () => {
        const { noteTypes, inputValue, currNoteType } = this.state;
        let info;
        switch (noteTypes[currNoteType].type) {
            case 'NoteText':
                info = { txt: inputValue };
                break;
            case 'NoteImg':
                info = { url: inputValue };
                break;
            case 'NoteTodos':
                info = { todos: this.convertTodos(inputValue) };
                break;
            case 'NoteVideo':
                info = { url: this.convertVideoURL(inputValue) };
                break;
        }
        const newNote = {
            id: makeId(),
            type: noteTypes[currNoteType].type,
            title: 'Title...',
            isPinned: false,
            info,
            style: {
                backgroundColor: '#aaaaaa'
            }
        }
        notesService.addNote(newNote);
        this.props.loadNotes();
    }
    convertTodos = (todosTxts) => {
        todosTxts = todosTxts.split(',');
        const todos = todosTxts.map(todoTxt => { return { txt: todoTxt, doneAt: null } });
        return todos;
    }
    convertVideoURL = (url) => {
        const newUrl = url.replace('watch?v=', 'embed/');
        console.log(newUrl);
        return newUrl;
    }
    render() {
        const { noteTypes, currNoteType } = this.state;
        return (
            <section className="add-note">
                <input type="text" value={this.state.inputValue} placeholder={noteTypes[currNoteType].placeholder} onChange={(ev) => { this.setValue(ev.target.value) }} />
                <div className="add-note-btn-container">
                {noteTypes.map((type, idx) => {
                    return <div
                        className="btn-select-note-type"
                        key={idx}
                        onClick={() => { this.setNoteType(idx) }}
                        style={{ color: (idx === currNoteType) ? '#292929' : '#d3d3d3' }}>
                        {type.btnTxt}
                    </div>
                })}
                <div className="btn-add-note" onClick={(ev) => { this.onAddNote(ev.target, currNoteType) }}>
                    <i className="fas fa-plus-square"></i>
                </div>
                </div>
            </section>
        )
    }
}