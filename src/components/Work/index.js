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
            jobDescription={
              'I excel at spilling drinks and making silky smooth milk for coffee.'
            }
          />
          <Job
            jobTitle={'Science Content Author'}
            jobCompany={'Oxford University Press'}
            jobDate={'Mar 2022 - Present'}
            jobDescription={
              'I read through VCE textbooks prior to production to ensure scientific accuracy and produce revision material.'
            }
          />
          <Job
            jobTitle={'Senior Tutor'}
            jobCompany={'Nam Quang Tuition'}
            jobDate={'Feb 2017 - Dec 2022'}
            jobDescription={
              'My biggest priority for teaching students was making sure they FULLY understood the content by developing their critical thinking and logical reasoning, rather than trying to mindlessly solve stacks of questions'
            }
          />
        </div>
      </div>
    </>
  );
};

export default Work;
