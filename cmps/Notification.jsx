import eventBus from '../services/event-bus-service.js'

export class Notification extends React.Component{
state={
    isShown
}
componentDidMount(){
eventBus.on('notify', ()=>this.setState({isShown=true}))
}

render(){
    <div>
        <h3>Notification</h3>
    </div>
}

}