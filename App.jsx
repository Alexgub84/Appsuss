const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { NavBar } from './cmps/NavBar.jsx'
import { Home } from './pages/Home.jsx'
import { Mail } from './pages/Mail.jsx'
import {MailApp} from './apps/Mail/MailApp.jsx'
import { NewMail } from './apps/Mail/cmps/NewMail.jsx'

import { Keep } from './pages/Keep.jsx'
import { About } from './pages/About.jsx'
import {Footer} from './cmps/Footer.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                    <NavBar />
                    <main>
                        <Switch>
                            <Route exact component={About} path="/about" />
                            <Route exact component={Keep} path="/keep" />
                            <Route exact component={Mail} path="/mail/:id?" />
                            <Route exact component={MailApp} path="/mail/compose/:id?" />
                            {/* <Route exact component={NewMail} path="/mail/compose/:id?" /> */}
                            <Route exact component={Home} path="/" />
                        </Switch>
                    </main>
                    <Footer />
            </Router>
        )
    }
}

