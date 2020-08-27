const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {Menu} from './cmps/Menu.jsx'
import {MailService} from './services/mail-service.js'
import {MailPreview} from './cmps/MailPreview.jsx'
import {MailFull} from './cmps/MailFull.jsx'

export class MailApp extends React.Component {
    state ={
        mails: null,
        filterBy:null,
        isFullShown:false,
        FullShownId:null
        
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

    toggleReadUnRead(id){
        MailService.toggleReadById(id)
    }

    getMailsToDisplay(){
        if (!this.state.mails) return
        return this.state.mails.filter((mail)=>{
            return true
        })
    }
    handleMailPreviewClicked =(id)=>{
        this.toggleReadUnRead(id);

        if(this.state.isFullShown && this.state.FullShownId===id ){
            this.setState({isFullShown:false})
        }else if (!this.state.isFullShown){
            this.setState({FullShownId:id,isFullShown:true})
        }else  this.setState({FullShownId:id})
    }
    closeFullPreview=()=>{
        this.setState({isFullShown:false})
    }

    render() {
        const mails = this.getMailsToDisplay();
        return (
            <div className="mail-container flex">
              <Menu/>
                {mails && <ul className="mails-list">
                    {mails.map((mail,idx)=>{
                        return(
                        <div>
                            <MailPreview key={mail.id} mail={mail} mailPreivewClicked={this.handleMailPreviewClicked} />
                            {this.state.isFullShown && this.state.FullShownId===mail.id && <MailFull key={mail.id+'2'} mail={mail} closeFullPreview={this.closeFullPreview}/>}
                         </div>
                        ) 
                    })}
                </ul>        
                }
            </div>
    
        )
    }
}