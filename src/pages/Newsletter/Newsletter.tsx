import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsPageDiv">
            <h1>Bite-Sized Brilliance</h1>
            <p>
                Bite-Sized Brilliance is a newsletter I write hosted on
                Substack.
                <br />
                <br /> 
                I started this newsletter in July of 2024 while beginning
                my career as a developer. Having always held an interest in
                self-development, I really enjoy writing my thoughts on the
                subject as they help solidify them internally.
            </p>
            <a
                className="news-link"
                href="https://bitesizedbrilliance.substack.com">
                Click here to visit the Newsletter on Substack
            </a>
            <p>
                Below are some screenshots to help you get a feel for the kind of content
                contained in the publication.
            </p>
            <div className="news-page-images">
                <img className="bite-image" src="/images/Bite-Home.jpg"></img>
                <img className="bite-image" src="/images/Bite-About.jpg"></img>
            </div>
        </div>
    );
};

export default Newsletter;
