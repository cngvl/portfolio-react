import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm{' '}
          </h1>
          <img src={LogoTitle} alt="" />
          lobodan
          <br />
          web developer
          <h2>Jnr. Software Engineer / Science Content Specialist</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
