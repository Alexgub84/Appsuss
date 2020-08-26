const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {Menu} from './cmps/Menu.jsx'
import {MailService} from './services/mail-service.js'
import {MailPreview} from './cmps/MailPreview.jsx'

export class MailApp extends React.Component {
    state ={
        mails: null
    }

    componentDidMount(){
        this.getMailsToDisplay();
        console.log('mounted');
    }
    getMailsToDisplay(){

        MailService.query()
            .then(mails=>{
                this.setState({mails})
            })         
    }   

    render() {
        const {mails} = this.state;
        return (
            <div className="mail-container">
              <Menu/>
            {mails && <ul className="mails-list">
                {mails.map((mail,idx)=>{
                    return  <MailPreview key={idx} mail={mail}/>
                })}
            </ul>        
            }
    
            </div>
    
        )
    }
}