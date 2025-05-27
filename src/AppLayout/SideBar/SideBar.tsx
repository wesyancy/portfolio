import { NavLink } from 'react-router-dom';
import { VscFiles, VscMail } from 'react-icons/vsc';
import './SideBar.css';

const SideBar = () => {
    return (
        <nav className="vs-sidebar">
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    'vs-sidebar-btn' + (isActive ? ' active' : '')
                }
                title="Projects">
                <VscFiles size={24} />
            </NavLink>
            <NavLink
                to="/bio"
                className={({ isActive }) =>
                    'vs-sidebar-btn' + (isActive ? ' active' : '')
                }
                title="Bio">
                <VscFiles size={24} />
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    'vs-sidebar-btn' + (isActive ? ' active' : '')
                }
                title="Contact">
                <VscMail size={24} />
            </NavLink>
        </nav>
    );
};

export default SideBar;
