import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

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
        <h1>
          <AnimatedLetters
            strArray={portfolioArray}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
      </div>
    </>
  );
};

export default Portfolio;
