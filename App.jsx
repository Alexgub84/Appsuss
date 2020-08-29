const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {NavBar} from './cmps/NavBar.jsx'
import {Home} from './pages/Home.jsx'
import {Mail} from './pages/Mail.jsx'
import {Keep} from './pages/Keep.jsx'
import {About} from './pages/About.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <NavBar/>
                <main>
                  <Switch>
                      <Route component = {About} path="/about"/>
                      <Route component = {Keep} path="/keep"/>
                      <Route component = {Mail} path="/mail/"/>
                      <Route component = {Home} path="/"/>
                  </Switch>
                </main>
                {/* <Notification/> */}
            </div>
            </Router>
        )
    }
}

