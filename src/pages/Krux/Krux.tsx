import './Krux.css'

const Krux = () => {

    return (
        <div className='kruxPageDiv'>
            <h1>Krux</h1>
            <p>This is the Krux Climbing App. *Currently in Alpha*</p>
            <p>Answer a few questions and Krux builds a training plan that fits your goals, experience, and available tools/equipment.</p>
            <p>As you log your workouts, Krux tracks your progress and dials up the challenge each week—so you are always leveling up.</p>
            <p>Krux isn’t a repackaged fitness app—it’s built specifically for climbers, with workouts that translate directly to better performance on the wall.</p>
            <iframe className='krux-iframe' src='https://kruxapp.com'></iframe>
        </div>
    );
};

export default Krux;