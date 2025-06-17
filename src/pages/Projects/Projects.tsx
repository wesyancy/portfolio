import './Projects.css';
import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import Backgrounder from '../../components/backgrounder/backgrounder';

const explorerData = [
  { name: 'Personal Portfolio', ext: 'tsx' },
  { name: 'Blog Platform', ext: 'tsx' },
  { name: 'Chat App', ext: 'tsx' },
  { name: 'Weather Dashboard', ext: 'jsx' },
  { name: 'Task Tracker', ext: 'tsx' },
];

const Projects = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="projects-layout">
            <aside className="explorer-pane">
                <div className="explorer-folder" onClick={() => setOpen(o => !o)}>
                    {open ? <VscChevronDown /> : <VscChevronRight />}
                    <span className="folder-name">projects</span>
                </div>
                {open && (
                  <ul className="explorer-files">
                      {explorerData.map((proj, idx) => (
                        <li key={proj.name + idx} className="explorer-file">
                            <FaReact className="file-icon" color='#5b86a0'/>
                            <span>{proj.name}.{proj.ext}</span>
                        </li>
                      ))}
                  </ul>
                )}
            </aside>
            <div className='projectPageDiv'>
                <h1>Here are my Projects</h1>
                <p>Shown in a small window</p>
                <Backgrounder></Backgrounder>
            </div>
        </div>
    );
};

export default Projects;