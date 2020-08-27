const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {Menu} from './cmps/Menu.jsx'
import {MailService} from './services/mail-service.js'
import {MailPreview} from './cmps/MailPreview.jsx'
import {MailFull} from './cmps/MailFull.jsx'
import { NewMail } from './cmps/NewMail.jsx'

export class MailApp extends React.Component {
    state ={
        mails: null,
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
                console.log('Loading new mails');
            })         
    }  
    sendNewMail=(mail)=>{
        this.toggleNewMail()
        console.log('New Mail');
    }
    setFilterTrash=()=>{
        this.setState({filterBy:'trash'});
    }
    setFilterInbox=()=>{
        this.setState({filterBy:'inbox'});
    }
    toggleNewMail=()=>{
        this.setState({isNewMail:!this.state.isNewMail})
    }

    toggleReadUnRead(id){
        MailService.toggleReadById(id)
    }

    getMailsToDisplay(){
        const {filterBy} = this.state
        if (!this.state.mails) return
        return this.state.mails.filter((mail)=>{
            return (filterBy==='trash' && mail.isTrash) || (filterBy==='inbox' && !mail.isTrash)
        })
    }
    handleMailPreviewClicked =(id)=>{
        this.toggleReadUnRead(id);

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
    

    render() {
        const mails = this.getMailsToDisplay();
        return (
            <section>
            {<NewMail onSend={this.sendNewMail}/> && this.state.isNewMail}
            <div className="mail-container flex">
              <Menu filterByTrash={this.setFilterTrash} filterByInbox={this.setFilterInbox} composeNew={this.toggleNewMail}/>
                {mails && <ul className="mails-list">
                    {mails.map((mail,idx)=>{
                        return(
                        <div>
                            <MailPreview key={mail.id} mail={mail} toggleCheckbox={this.onToggleCheckbox} mailPreivewClicked={this.handleMailPreviewClicked} />
                            {this.state.isFullShown && this.state.fullShownId===mail.id && <MailFull key={mail.id+'2'} mail={mail} closeFullPreview={this.closeFullPreview} moveToTrash={this.onMoveToTrash}/>}
                         </div>
                        ) 
                    })}
                </ul>        
                }
            </div>
            </section>
        )
    }
}