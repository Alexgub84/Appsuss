import {NoteText} from './NoteText.jsx'
import {NoteTodos} from './NoteTodos.jsx'
import {NoteVideo} from './NoteVideo.jsx'
import {NoteImg} from './NoteImg.jsx'

export class Note extends React.Component {
    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note} />
            case 'NoteTodos':
                return <NoteTodos note={note} />
            case 'NoteVideo':
                return <NoteVideo note={note} />
            case 'NoteImg':
                return <NoteImg note={note} />
            // default:
            //     return //...some default error view
        }
    }
    render() {
        const { note } = this.props;
        return (<li>{this.DynamicCmp(note)}</li>);
    }
}


