import {MailService} from '../services/mail-service.js'
import {MailPreview} from '../cmps/MailPreview.jsx'
import {MailFull} from '../cmps/MailFull.jsx'

export class MailsList extends React.Component{

    state={
        mails:this.props.mails,
        isFullShown:false,
        fullShownId:null
    }

    loadMails=()=>{
        this.setState({mails:this.props.mails})
    }


    componentDidUpdate(prevProps) {
        if (prevProps.mails === this.props.mails) return
        this.loadMails()
    }

    handleMailPreviewClicked =(id)=>{
        this.props.onToggleReadUnread(id);
        if(this.state.isFullShown && this.state.fullShownId===id ){
            this.setState({isFullShown:false})
        }else if (!this.state.isFullShown){
            this.setState({fullShownId:id,isFullShown:true})
        }else  this.setState({fullShownId:id})
    }

    closeFullPreview=()=>{
        this.setState({isFullShown:false})
    }
    onToggleCheckbox=(ev)=>{
        console.log(ev);
    }
    onMoveToTrash=(id)=>{
        MailService.toggleTrashById(id);
        this.closeFullPreview();
    }
    render(){
        const mails = this.state.mails;
        return (
            <ul className="mails-list">
            {mails.map((mail)=>{
                return(
                <div key={mail.id}>
                    <MailPreview mail={mail} toggleCheckbox={this.onToggleCheckbox} mailPreivewClicked={this.handleMailPreviewClicked} />
                    {this.state.isFullShown && this.state.fullShownId===mail.id && <MailFull mail={mail} closeFullPreview={this.closeFullPreview} moveToTrash={this.onMoveToTrash}/>}
                </div>
                ) 
            })}
            </ul>     
            )   
    }

}