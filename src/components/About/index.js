import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  // const aboutMeString = 'About Me';
  const aboutMeArray = 'About Me'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');
  // console.log(aboutMeArray);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={aboutMeArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>Example p text 1 </p>
          <p>Example p text 2 </p>
          <p>Example p text 3 </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;