export function AboutCard({ about }) {
    return <div className="about-card">
        <h3>{about.name}</h3>
        <h4>{about.title}</h4>
        <div className="img-container">
            <img src={about.img} />
        </div>
        <ul>
            {about.description.map((sentence, idx) => <li key={idx}>{sentence}</li>)}
        </ul>
        <div className="contacts-container">
            {about.contacts.map((contact, idx) =>
                <a key={idx} href={contact.url}>
                    <i className={contact.className}></i>
                </a>
            )}
        </div>
    </div>;
}
