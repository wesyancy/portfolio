import { NavLink } from 'react-router-dom';
import {
    VscFiles,
    VscMail,
    VscAccount,
    VscRocket,
    VscNotebook,
} from 'react-icons/vsc';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="vs-sidebar">
            <div className="vs-sidebar-top">
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        'vs-sidebar-btn' + (isActive ? ' active' : '')
                    }
                    title="Projects">
                    <VscFiles size={24} />
                </NavLink>
                <NavLink
                    to="/hire"
                    className={({ isActive }) =>
                        'vs-sidebar-btn' + (isActive ? ' active' : '')
                    }
                    title="Hire Me">
                    <VscRocket size={24} />
                </NavLink>
                <NavLink
                    to="/newsletter"
                    className={({ isActive }) =>
                        'vs-sidebar-btn' + (isActive ? ' active' : '')
                    }
                    title="Newsletter">
                    <VscNotebook size={24} />
                </NavLink>
            </div>
            <div className="vs-sidebar-bottom">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        'vs-sidebar-btn' + (isActive ? ' active' : '')
                    }
                    title="Contact">
                    <VscMail size={24} />
                </NavLink>
                <NavLink
                    to="/bio"
                    className={({ isActive }) =>
                        'vs-sidebar-btn' + (isActive ? ' active' : '')
                    }
                    title="Bio">
                    <VscAccount size={24} />
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
