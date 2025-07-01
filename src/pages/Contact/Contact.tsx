import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contactPageDiv">
            <h1>Contact Info</h1>
            <div>
                <Link
                    to="mailto:wes.kyancy@gmail.com"
                    id="externalLink"
                    target="_blank"
                    className='contact-link'>
                    Email
                </Link>
            </div>
            <div>
                <Link
                    to="https://bitesizedbrilliance.substack.com/"
                    id="externalLink"
                    target="_blank"
                    className='contact-link'>
                    Newsletter
                </Link>
            </div>
            <div>
                <Link
                    to="https://www.linkedin.com/in/wesley-yancy"
                    id="externalLink"
                    target="_blank"
                    className='contact-link'>
                    LinkedIn
                </Link>
            </div>
            <div>
                <Link
                    to="https://github.com/wesyancy"
                    id="externalLink"
                    target="_blank"
                    className='contact-link'>
                    GitHub
                </Link>
            </div>
        </div>
    );
};

export default Contact;
