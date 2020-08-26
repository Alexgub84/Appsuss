
import {MailApp} from '../apps/Mail/MailApp.jsx'

export class Mail extends React.Component{
   
   
   componentDidMount(){
    console.log('Change mounted');
    const transferedId = this.props.match.params
    console.log(transferedId);
   }
    render (){
    return (
        <section>

            <MailApp/>
        </section>
    )}
}