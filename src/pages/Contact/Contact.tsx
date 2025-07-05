import './Contact.css';

const Contact = () => {
    return (
        <div className="contactPageDiv">
            <h1>Contact Info</h1>
            <div className="contact-link-container">
                <a
                    className="contact-link"
                    href="mailto:wes.kyancy@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="externalLink">
                    Email
                </a>
                <a
                    className="contact-link"
                    href="https://bitesizedbrilliance.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="externalLink">
                    Newsletter
                </a>
                <a
                    className="contact-link"
                    href="https://www.linkedin.com/in/wesley-yancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="externalLink">
                    LinkedIn
                </a>
                <a
                    className="contact-link"
                    href="https://github.com/wesyancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="externalLink">
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Contact;
