
import { notesService } from '../services/notes-service.js'


export class AddNote extends React.Component {
    state = {
        noteTypes: [
            { type: 'NoteText', placeholder: 'What\'s on your mind?', btnTxt: <p>txt</p> },
            { type: 'NoteImg', placeholder: 'Enter image\'s URL...', btnTxt: <p>img</p> },
            { type: 'NoteTodos', placeholder: 'Enter comma seperated list...', btnTxt: <p>todo</p> },
            { type: 'NoteVideo', placeholder: 'Enter video\'s URL...', btnTxt: <p>vid</p> }
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
        // https://www.youtube.com/watch?v=VjahLtBeElE
        // https://www.youtube.com/embed/VjahLtBeElE
    }
    render() {
        const { noteTypes, currNoteType } = this.state;
        return (
            <section className="add-note">
                <input type="text" value={this.state.inputValue} placeholder={noteTypes[currNoteType].placeholder} onChange={(ev) => { this.setValue(ev.target.value) }} />
                {noteTypes.map((type, idx) => {
                    return <div
                        className="btn-select-note-type"
                        key={idx}
                        onClick={() => { this.setNoteType(idx) }}
                        style={{ fontWeight:(idx === currNoteType) ? 'bold' : 'normal' }}>
                        {type.btnTxt}
                    </div>
                })}
                <button onClick={(ev) => { this.onAddNote(ev.target, currNoteType) }}>+</button>
            </section>
        )
    }
}

// onAddNote = (noteType) => {
//     let info;
//     switch (noteType) {
//         case 'NoteText':
//             info = { txt: 'Text...' };
//             break;
//         case 'NoteImg':
//             info = { url: 'URL...' };
//             break;
//         case 'NoteTodos':
//             info = { todos: [{ txt: 'To do...', doneAt: null }] };
//             break;
//         case 'NoteVideo':
//             info = {};
//             break;

//     }
//     const newNote = {
//         id: makeId(),
//         type: noteType,
//         title: 'Title...',
//         isPinned: false,
//         info,
//         style: {
//             backgroundColor: '#aaaaaa'
//         }
//     }
//     notesService.addNote(newNote);
//     this.loadNotes();
// }