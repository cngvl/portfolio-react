import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const About = () => {
  // const aboutMeString = 'About Me';
  const aboutMeArray = 'About Me'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(aboutMeArray);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
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
    </div>
  );
};

export default About;
