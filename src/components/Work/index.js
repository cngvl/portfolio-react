import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Job from './Job';

const Work = () => {
  const portfolioArray = 'Work'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    // ????
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container work-page">
        <div className="work-header">
          <h1>
            <AnimatedLetters
              strArray={portfolioArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <div className="work-container">
          <Job
            jobTitle={'Barista'}
            jobCompany={'The Usual Joint'}
            jobDate={'Sept 2023 - Present'}
          />
          <Job
            jobTitle={'Science Content Author'}
            jobCompany={'Oxford University Press'}
            jobDate={'Mar 2022 - Present'}
          />
          <Job
            jobTitle={'Senior Tutor'}
            jobCompany={'Nam Quang Tuition'}
            jobDate={'Feb 2017 - Dec 2022'}
          />
        </div>
      </div>
    </>
  );
};

export default Work;
