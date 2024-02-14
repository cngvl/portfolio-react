import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
// import LogoTitle from '../../assets/images/logo-s.png';
// import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const introString = "I'm Viet";
  const introArray = introString.split('');
  // console.log();
  const jobString = 'Software Engineer.';
  const jobArray = jobString.split('');

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            {/* <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Jnr. Software Engineer / Science Content Author / Barista</h2>
          <a
            href="https://www.linkedin.com/in/viet-cuong-le/"
            target="_blank"
            className="flat-button"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
