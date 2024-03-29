import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import School from './School';

const Education = () => {
  const portfolioArray = 'Education'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');

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
      <div className="container education-page">
        <div className="education-header">
          <h1>
            <AnimatedLetters
              strArray={portfolioArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <div className="education-container">
          <School
            schoolInstitute={'Le Wagon'}
            schoolDate={'Jan 2023 - Mar 2023'}
            schoolCertification={'Web Development Diploma'}
            schoolDescription={
              'Pitched, designed and deployed a project ( Melbourne Park Finder ) in a team of four which can seen on my Project section!'
            }
          />
          <School
            schoolInstitute={'Monash University'}
            schoolDate={'Feb 2017 - Jan 2021'}
            schoolCertification={'Bachelor of Science (Honours) (BSc Hons)'}
            schoolDescription={
              'Wrote a thesis on Achilles Tendinopathy and graduated with High Disctinction grade. Majored in Physiology and Developmental Biology'
            }
          />
        </div>
      </div>
    </>
  );
};

export default Education;
