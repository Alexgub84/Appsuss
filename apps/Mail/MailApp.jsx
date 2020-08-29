const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Menu } from './cmps/Menu.jsx'
import { MailService } from './services/mail-service.js'
import { MailsList } from './cmps/MailsList.jsx'
import { NewMail } from './cmps/NewMail.jsx'

export class MailApp extends React.Component {
    state ={
        mails: null,
        mailsToDisplay:null,
        isNewMail:false,
        filterBy:'inbox',
        isFullShown:false,
        fullShownId:null
    }

    componentDidMount(){
        this.loadMails();
       
    }
    
    loadMails=()=>{
        MailService.query()
            .then(mails=>{
                this.setState({mails})
            })         
    }  

    sendNewMail=(mail)=>{
        this.toggleNewMail()
        MailService.addNewMail(mail);
        this.loadMails()
    }

    setFilterTrash=()=>{
        this.setState({filterBy:'trash'});
    }

    setFilterInbox=()=>{
        this.setState({filterBy:'inbox'});
    }

    setFilterSent=()=>{
        this.setState({filterBy:'sent'});

    }
    toggleNewMail=()=>{
        this.setState({isNewMail:!this.state.isNewMail})
    }

    toggleReadUnRead=(id)=>{
        MailService.toggleReadById(id)
    }

    handleMailPreviewClicked =(id)=>{
        this.toggleReadUnRead(id);
        if(this.state.isFullShown && this.state.fullShownId===id ){
            this.setState({isFullShown:false})
        }else if (!this.state.isFullShown){
            this.setState({fullShownId:id,isFullShown:true})
        }else  this.setState({fullShownId:id})
    }
    // closeFullPreview=()=>{
    //     this.setState({isFullShown:false})
    // }
    // onToggleCheckbox=(ev)=>{
    //     console.log(ev);
    // }
    // onMoveToTrash=(id)=>{
    //     MailService.toggleTrashById(id);
    //     this.closeFullPreview();
    // }
    getMailsToDisplay(){
        const {filterBy} = this.state
        if (!this.state.mails) return
        return this.state.mails.filter((mail)=>{
            return (filterBy==='trash' && mail.isTrash) || (filterBy==='inbox' && !mail.isTrash) ||(filterBy ==='sent' && mail.isSent)
        })
        
    }

    render() {
       const mails = this.getMailsToDisplay();
 
        return (
           
                <div className="mail-container flex">
                    <Menu filterByTrash={this.setFilterTrash} filterByInbox={this.setFilterInbox} filterBySent={this.setFilterSent} composeNew={this.toggleNewMail}/>
                    {this.state.isNewMail && <NewMail onSend={this.sendNewMail} toggleNewMail={this.toggleNewMail}/>||
                        mails && <MailsList mails={mails}  onToggleReadUnread={this.toggleReadUnRead} loadMails={this.loadMails}/>
                    }
                </div>
            
        )
    }
}