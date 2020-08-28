

export class NewMail extends React.Component {

    state = {
        mail: {
            id: makeId,
            fromName:'',
            subject: '',
            body: '',
            fromEmail: 'alex.gub@gmail.com',
            isRead: false,
            isSent: true,
            isTrash: false,
            sentAt: new Date(),
        }
    }
    sendMail = () => {
        this.setState({mail:{...this.state.mail,fromName:this.state.mail.fromEmail}})
        this.props.onSend(this.state.mail);
    }

    inputChange = (ev) => {
        const {name,value}= ev.target;
        this.setState({ mail: { ...this.state.mail, [name]: value } })
    }


    render() {
        return (
            <ul className="new-mail-container">
                <li className="new-mail-title">New Message</li>
                <li className="new-mail-line">
                    <span>To:</span>
                    <input type="text" name="to" onChange={this.inputChange} />
                </li>
                <li className="new-mail-line">
                    <span>Cc:</span>
                    <input type="text" />
                </li>
                <li className="new-mail-line">
                    <span>Bcc:</span>
                    <input type="text" />
                </li>
                <li className="new-mail-line">
                    <span>Subject:</span>
                    <input type="text" name="subject" onChange={this.inputChange} />
                </li>
                <li><textarea name="body" onChange={this.inputChange}></textarea></li>
                <li className="new-mail-btns btn">
                    <div onClick={this.sendMail}>Send</div>
                    <div className="btn">Delete</div>
                </li>
            </ul>

        )
    }
}