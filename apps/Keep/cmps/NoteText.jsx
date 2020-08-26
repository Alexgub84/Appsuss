export class NoteText extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        const { note } = this.state;
        return note && <p>{note.info.txt}</p>;
    }
}