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
            ProjectStack={
              'MapBox GL JS, Stimulus, Javascript, Ruby on Rails, Tailwind, Heroku, Flowbite'
            }
            ProjectDescription={
              'Designed an app to find available on-street parking in Melbourne CBD in real time. Using City of Melbourne’s database API, MapBox GL JS, Ruby on Rails and Google Maps to display the latest data.'
            }
            ProjectPreview={PlaceHolderImage}
            ProjectLink={'https://melbourne-park-finder.herokuapp.com/'}
          />
          <Project
            ProjectTitle={'PhraseTracker Discord Bot'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={'Javascript, Node.js, Discord.js'}
            ProjectDescription={
              'This was a small project I wanted to make for my friends to use on our Discord channel. It works by calling the command with a phrase to look out for and a target user ( can also be randomised ). After the phrase has been mentioned a certain amount of times, the bot will generate a playful message.'
            }
          />
          <Project
            ProjectTitle={'Personal Portfolio'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={'HTML, CSS, React'}
            ProjectDescription={
              "This is the Portfolio you're looking at right now. What else is there to say here."
            }
          />
          <Project
            ProjectTitle={'Weather Scheduler'}
            ProjectPreview={PlaceHolderImage}
            ProjectStack={'Python, Twilio'}
            ProjectDescription={
              'I drew inspiration for this project from a TikTik video by @tech_sis8. I thought that this was a good beginner-friendly project that I could eventually up-scale when I want to get into tools that require CRON scheduling and / or SMS messaging'
            }
          />
          <Project
            ProjectTitle={'PDF Merger'}
            ProjectStack={'Python, Shell Scripting'}
            ProjectPreview={PlaceHolderImage}
            ProjectDescription={
              "A quick python script I made because I found myself often using online PDF editors which seemed super sketchy, especially when I was working with documents containing sensitive information. Works completely offline so I won't need to worry about my info being stolen. I plan to add additional features such as removing and reordering files soon!"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
