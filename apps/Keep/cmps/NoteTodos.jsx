export class NoteTodos extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        const { note } = this.state;
        return note && <ul>
            {note.info.todos.map((todo, idx) => <li key={idx}>{todo.txt}</li>)}
        </ul>
    }
}