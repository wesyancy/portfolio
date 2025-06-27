import ProjectsMenu from './ProjectsMenu';
import { Outlet } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div className="vs-root">
            <ProjectsMenu />
            {/* <div className="vs-main-area"> */}
            <Outlet />
            {/* </div> */}
        </div>
    );
};

export default Projects;
