import ProjectsSideBar from './ProjectsSideBar/ProjectsSideBar';
import { Outlet } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div className="vs-root">
            <ProjectsSideBar />
            {/* <div className="vs-main-area"> */}
            <Outlet />
            {/* </div> */}
        </div>
    );
};

export default Projects;
