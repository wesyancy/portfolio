import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contactPageDiv">
            <h1>Contact Info</h1>
            <p>
                <Link to="mailto:wes.kyancy@gmail.com" id="externalLink">
                    Email
                </Link>
            </p>
            <p>
                <Link
                    to="https://bite-sizedbrilliance.com"
                    id="externalLink">
                    Newsletter
                </Link>
            </p>
            <p>
                <Link
                    to="https://www.linkedin.com/in/wesley-yancy"
                    id="externalLink">
                    LinkedIn
                </Link>
            </p>
            <p>
                <Link to="https://github.com/wesyancy" id="externalLink">
                    GitHub
                </Link>
            </p>
        </div>
    );
};

export default Contact;
