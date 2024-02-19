import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">&lt;body&gt;</div>
        <Outlet />
        <div className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        </div>
      </div>
    </div>
  );
};

export default Layout;
