import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Project from './Project';
import PlaceHolderImage from '../../assets/images/placeholder-image.png';

const Portfolio = () => {
  const portfolioArray = 'Portfolio'.split('');
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
      <div className="container portfolio-page">
        <div className="portfolio-header">
          <h1>
            <AnimatedLetters
              strArray={portfolioArray}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <div className="project-container columns">
          <Project
            ProjectTitle={'MelbParkFinder'}
            ProjectStack={[
              'MapBox GL JS',
              'Stimulus',
              'Javascript',
              'Ruby on Rails',
              'Tailwind',
              'Heroku',
              'Flowbite',
            ]}
            ProjectDescription={'The quick brown fox jumps over the lazy dog'}
            ProjectPreview={PlaceHolderImage}
          />
          <Project
            ProjectTitle={'PhraseTracker Discord Bot'}
            ProjectPreview={PlaceHolderImage}
          />
          <Project
            ProjectTitle={'React Portfolio'}
            ProjectPreview={PlaceHolderImage}
          />
          <Project
            ProjectTitle={'WeatherScheduler'}
            ProjectStack={('Python', 'Twilio')}
            ProjectPreview={PlaceHolderImage}
          />
          <Project
            ProjectTitle={'PDF Merger'}
            ProjectPreview={PlaceHolderImage}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
