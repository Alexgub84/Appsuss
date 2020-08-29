import { MailService } from '../services/mail-service.js'


export class NewMail extends React.Component {

    state = {
        mail: {
            id: makeId,
            fromName:'Stranger',
            subject: '',
            body: '',
            fromEmail: 'alex.gub@gmail.com',
            isRead: false,
            isSent: true,
            isTrash: false,
            sentAt: new Date(),
        },
        isReplay:false
    }
    componentDidMount(){
        if (this.state.isReplay){
            let newMail = this.onReplay();
            this.setState({mail: {...this.state.mail,body:newMail.body,subject:newMail.subject}})
        }
    }
    sendMail = () => {
        this.props.onSend(this.state.mail);
    }

    inputChange = (ev) => {
        const {name,value}= ev.target;
        this.setState({ mail: { ...this.state.mail, [name]: value } })
    }

    onReplay (id){
        var mail = MailService.getMailById('ac');
        mail.body = '\n\n'+mail.body;
        mail.subject= 'Re:'+mail.subject;
        return mail
    }

    render() {
       
        return (
            <ul className="new-mail-container">
                <li className="new-mail-title">  New Message</li>
                <li className="new-mail-line">
                    <span>To:</span>
                    <input type="text" name="to"  onChange={this.inputChange} />
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
                    <input type="text" name="subject" value={this.state.mail.subject} onChange={this.inputChange} />
                </li>
                <li><textarea name="body" value={this.state.mail.body}  onChange={this.inputChange}></textarea></li>
                <li className="new-mail-btns ">
                    <div  className="send btn" onClick={this.sendMail}>Send</div>
                    <div className="delete btn" onClick={this.props.closeNewMail}><i className="fas fa-trash"></i></div>
                </li>
            </ul>

        )
    }
}