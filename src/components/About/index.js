import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {
  faPython,
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
          <p>
            I'm a grad from Le Wagon's Web Development course, fueled by a
            passion for technology and healthcare, I hope use my skills to make
            a meaningful impact on people's lives.
          </p>
          <p>
            I'm a believer in the power of small, consistent steps to
            continually improve and refine my abilities. Whether it's coding,
            problem-solving, or even making gym gains.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
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
