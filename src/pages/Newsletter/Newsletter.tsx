import './Newsletter.css'

const Newsletter = () => {

    return (
        <div className='newsPageDiv'>
            <h1>Newsletter</h1>
            <p>This is my newsletter, told in Classic Serif.</p>
            <iframe className='bite-iframe' src='https://bitesizedbrilliance.substack.com'></iframe>
        </div>
    );
};

export default Newsletter;