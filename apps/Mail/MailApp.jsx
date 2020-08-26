const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {Menu} from './cmps/Menu.jsx'
import {MailService} from './services/mail-service.js'
import {MailPreview} from './cmps/MailPreview.jsx'
import {MailFull} from './cmps/MailFull.jsx'

export class MailApp extends React.Component {
    state ={
        mails: null,
        filterBy:null
        
    }

    componentDidMount(){
        this.loadMails();
        console.log('mounted');
    }
    loadMails=()=>{
        MailService.query()
            .then(mails=>{
                this.setState({mails})
            })         
    }  

    toggleReadUnRead=(id)=>{
        console.log('Mail clicked:',id);
    }

    getMailsToDisplay(){
        if (!this.state.mails) return
        return this.state.mails.filter((mail)=>{
            return true
        })
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
                            <MailPreview key={idx} mail={mail} mailPreivewClicked={this.toggleReadUnRead} loadMails={this.loadMails}/>
                            {/* {this.state.isShown && <MailFull/>} */}
                         </div>
                        ) 
                    })}
                </ul>        
                }
            </div>
    
        )
    }
}