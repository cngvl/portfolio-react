import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const hiArray = 'Hi,'.split('');
  const introArray = "I'm Viet".split('');
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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={12}
            />
            <br />
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
