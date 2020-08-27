export class NoteImg extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        const { note } = this.state;
        return note && <div className="img-container">
                <img src={note.info.url} />
            </div>
    }
}