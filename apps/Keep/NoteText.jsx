export class NoteText extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        console.log(this.props);
        const { note } = this.state;
        return note && <div className={`note text note=${note.id}`}>
            <h2>{note.title}</h2>
            <p>{note.info.txt}</p>
        </div>
    }
}