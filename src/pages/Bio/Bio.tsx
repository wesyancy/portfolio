import './Bio.css';

const Bio = () => {
    return (
        <div className="bioPageDiv">
            <h1>About Me</h1>
            <div className="im-wes">
                <h2>I’m</h2>
                <h2 className="wes">Wes</h2>
            </div>
            <div className="content-block">
                <img src="/images/WesArcher.jpeg"></img>
                <h3 className="text-block">
                    I'm a front-end developer who wakes up, caffeinates hard,
                    then codes harder. I started writing code in 2022 and
                    professionally entered the game in 2023, first getting paid
                    to tweak production code at Divergence Academy, where I also
                    led admissions teams, managed partnerships, and quietly
                    hijacked every dev task I could get my hands on.
                </h3>
            </div>
            <div className="content-block">
                <img src="/images/WesGhibli.jpeg"></img>
                <h3 className="text-block">
                    Before tech, I spent over five years in sales and education,
                    and I still bring that customer-centric mindset into every
                    sprint — translating business needs into elegant, intuitive
                    interfaces.
                </h3>
            </div>
            <div className="content-block">
                <img src="/images/WesSamuraiJack.jpeg"></img>
                <h3 className="text-block">
                    I specialize in React, Redux, and TypeScript, with a sharp
                    eye for UI/UX design and a soft spot for high-end
                    aesthetics. Whether I’m optimizing workflows or building
                    fleet-tracking dashboards, I wake up ready to make an impact
                    (and maybe a perfectly timed dad joke).
                </h3>
            </div>
            <div className="content-block">
                <img src="/images/Wes.jpeg"></img>
                <h3 className="text-block">
                    My secret weapon? A one-two punch of technical chops and
                    people skills that lets me bridge the gap between product,
                    users, and code.
                </h3>
            </div>
        </div>
    );
};

export default Bio;
