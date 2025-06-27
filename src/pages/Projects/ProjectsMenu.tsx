import React, { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import './ProjectsMenu.css';

import Backgrounder from '../Backgrounder/backgrounder';
import Krux from '../Krux/Krux';
// import BlogPlatform from '../BlogPlatform/BlogPlatform'; // (example future components)

type ProjectMenuItem = {
    name: string;
    component: React.ReactNode;
    icon?: React.ReactNode;
};

const projectMenu: ProjectMenuItem[] = [
    {
        name: 'Krux',
        component: <Krux />,
    },
    {
        name: 'Backgrounder',
        component: <Backgrounder />,
    },
];

const ProjectsSideBar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="projects-layout">
            <aside className="explorer-pane">
                <div className="explorer-folder">
                    <VscChevronDown />
                    <span className="folder-name">Projects</span>
                </div>
                <ul className="explorer-files">
                    {projectMenu.map((item, idx) => (
                        <li
                            key={item.name}
                            className={`explorer-file${
                                selected === idx ? ' active' : ''
                            }`}
                            onClick={() => setSelected(idx)}>
                            <VscChevronRight />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </aside>
            <div className="projectPageDiv">
                {projectMenu[selected].component}
            </div>
        </div>
    );
};

export default ProjectsSideBar;
