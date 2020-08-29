import { MailService } from '../services/mail-service.js'
import {notesService} from '../../Keep/services/notes-service.js'

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
        isReplay:false,
        replyId:null
    }
    componentDidMount(){
        if (this.props.replyId){
            this.setState({ replyId:this.props.replyId })
            this.onReply(this.props.replyId);
        }

    }
    sendMail = () => {
        this.props.onSend(this.state.mail);
    }

    inputChange = (ev) => {
        const {name,value}= ev.target;
        this.setState({ mail: { ...this.state.mail, [name]: value } })
    }

    onReply (id){
        var mail = MailService.getMailById(id);
        if (mail){
            mail.body = '\n\n'+mail.body;
            mail.subject= 'Re:'+mail.subject;
            this.setState({mail: {...this.state.mail,body:mail.body,subject:mail.subject}})
            return
        }
        var note = notesService.getNoteById(id);
        console.log(note);
        if (note){
            let bodyStr='Hey! I would like to share my note with you: \n \n';

            switch (note.type) {
                case 'NoteImg':
                case 'NoteVideo':
                    bodyStr+=note.info.url
                    break;
                case 'NoteText':
                    bodyStr+=note.info.txt
                    break;
                case 'NoteTodos':
                    bodyStr+=note.info.todos.reduce(((acc,todo)=>acc+='\t'+todo.txt+((todo.doneAt)?' (done)':'')+'\n'),'');
                    console.log(bodyStr);
                    break;

            }
            this.setState({mail: {...this.state.mail,body:bodyStr,subject:note.title}})
            return
        }
    }

    onSendNote=(id)=>{

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
                    <div className="delete btn" onClick={this.props.toggleNewMail}><i className="fas fa-trash"></i></div>
                </li>
            </ul>

        )
    }
}