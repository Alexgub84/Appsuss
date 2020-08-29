import {MailService} from '../services/mail-service.js'
import {MailPreview} from '../cmps/MailPreview.jsx'
import {MailFull} from '../cmps/MailFull.jsx'


export class MailsList extends React.Component{

    state={
        mails:this.props.mails,
        isFullShown:false,
        fullShownId:null,
        mailsChecked:[]
    }

    loadMails=()=>{
        this.setState({mails:this.props.mails})
    }


    componentDidUpdate(prevProps) {
        if (prevProps.mails === this.props.mails) return
        this.loadMails()
        console.log(this.state.mails);
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
    onToggleCheckbox=(id)=>{
        
        let checked=this.state.mailsChecked;
        if (checked.includes(id)){
            const idx = checked.indexOf(id);
            checked.slice(idx,1);
        }else{
            checked.push(id);
        }
        this.setState({mailsChecked:checked})
    }
    onMoveToTrash=(id)=>{
        if (MailService.getMailById(id).isTrash){
            // todo  - add confirm window
            MailService.deleteMail(id);

        }else{
            MailService.toggleTrashById(id);
        }
        console.log('Moving to trash');
        this.props.loadMails();
        this.closeFullPreview();
    
    }
    render(){
        const mails = this.state.mails;
        return (
                <ul className="mails-list">
                {mails.map((mail)=>{
                    return(
                        <div key={mail.id}>
                            <MailPreview  mail={mail} toggleCheckbox={this.onToggleCheckbox} mailPreivewClicked={this.handleMailPreviewClicked} />
                            {this.state.isFullShown && this.state.fullShownId===mail.id && <MailFull mail={mail} closeFullPreview={this.closeFullPreview} moveToTrash={this.onMoveToTrash}/>}
                        </div>
                        ) 
                })}
                </ul>    
            )   
    }

}