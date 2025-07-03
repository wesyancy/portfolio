// /Users/wes/Programming/Portfolio/src/AppLayout/StatusBar/StatusBar.tsx
import React from 'react';
import { VscWarning, VscSync, VscFiles, VscSymbolNamespace, VscRemote, VscSourceControl, VscError, VscBell } from 'react-icons/vsc';
import './StatusBar.css';

const StatusBar: React.FC = () => (
  <footer className="statusbar">
    <div className="statusbar-left">
      <div className="statusbar-item remote">
        <VscRemote size={16} style={{ marginRight: 4 }} />
        SSH: wes@host
      </div>
      <div className="statusbar-item">
        <VscSourceControl size={16} style={{ marginRight: 4 }} />
        main*
      </div>
      <div className="statusbar-item">
        <VscSync style={{ marginRight: 4 }} />
        0↓ 0↑
      </div>
      <div className="statusbar-item">
        <VscError style={{ marginRight: 4}} />
        0
      </div>
      <div className="statusbar-item">
        <VscWarning style={{ marginRight: 4}} />
        0
      </div>
    </div>
    <div className="statusbar-right">
      <div className="statusbar-item">
        Ln 1, Col 1
      </div>
      <div className="statusbar-item">
        Spaces: 2
      </div>
      <div className="statusbar-item">
        UTF-8
      </div>
      <div className="statusbar-item">
        LF
      </div>
      <div className="statusbar-item">
        <VscSymbolNamespace style={{ marginRight: 4 }} />
        TypeScript React
      </div>
      <div className="statusbar-item">
        <VscFiles style={{ marginRight: 4 }} />
        Prettier
      </div>
      <div className="statusbar-item">
        <VscBell />
      </div>
    </div>
  </footer>
);

export default StatusBar;