import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contactPageDiv">
            <h1>Contact Info</h1>
            <p>
                <Link
                    to="mailto:wes.kyancy@gmail.com"
                    id="externalLink"
                    target="_blank">
                    Email
                </Link>
            </p>
            <p>
                <Link
                    to="https://bitesizedbrilliance.substack.com/"
                    id="externalLink"
                    target="_blank">
                    Newsletter
                </Link>
            </p>
            <p>
                <Link
                    to="https://www.linkedin.com/in/wesley-yancy"
                    id="externalLink"
                    target="_blank">
                    LinkedIn
                </Link>
            </p>
            <p>
                <Link
                    to="https://github.com/wesyancy"
                    id="externalLink"
                    target="_blank">
                    GitHub
                </Link>
            </p>
        </div>
    );
};

export default Contact;
