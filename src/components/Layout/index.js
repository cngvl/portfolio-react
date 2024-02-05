import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span classname="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span classname="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span classname="bottom-tag-html"></span>
      </div>
    </div>
  );
};

export default Layout;
