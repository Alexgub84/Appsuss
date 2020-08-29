import { aboutServcie } from '../services/about-service.js'
import { AboutCard } from '../cmps/AboutCard.jsx'

export class About extends React.Component {
    render() {
        const abouts = aboutServcie.getAbouts();
        return (
            <React.Fragment>
                <h2>About</h2>
                <main className="about-container">
                    {abouts.map((about, idx) => <AboutCard key={idx} about={about} />)}
                </main>
            </React.Fragment>
        )
    }
}