import { useEffect, useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
// import 'chartjs-plugin-datalabels'; // Import the datalabels plugin
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

ChartJS.defaults.color = '#CCAC5F';
ChartJS.defaults.borderColor = '#555';

export const data = {
  labels:
    [
      'React JS',
      'Front-end web development',
      'Wordpress',
      'Rapid Prototyping',
      'Branding',
      'Adobe Creative Cloud',
      'Javascript',
      'Full-stack',
      'Back-end development'
    ],
  datasets: [
    {
      label: 'Skill %',
      data: [75, 80, 60, 50, 60, 90, 80, 50, 40],
      backgroundColor: 'rgba(119, 157, 113, 0.2)',
      // borderColor: 'rgba(119, 157, 113, 1)',
      borderColor: 'rgba(204, 172, 95, 0.7)',
      borderWidth: 1,
    },
  ],
};

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills'.split('')}
              idx={15}
            />
          </h1>
        </div>

        <div className="skill" id="skills">
          <blockquote>
            "Every living soul has different talents, different desires, different faculties.
            Be yourself, for even if you deceive the entire world, you will be ten thousand times worse than nothing" ~  C.g. Jung
          </blockquote>
          <div className='skill-bx'>
            <Radar
              data={data}
              responsive={responsive}
              options={{
                scales: {
                  r: {
                    angleLines: {
                      display: false
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                maintainAspectRatio: false, // Set this to false to control the aspect ratio
                plugins: {
                  legend: {
                    display: false, // Hide the legend
                  },
                },
                // layout: {
                //   padding: {
                //     top: 40,    // Adjust the top padding as needed
                //     bottom: 40, // Adjust the bottom padding as needed
                //     left: 40,   // Adjust the left padding as needed
                //     right: 40,  // Adjust the right padding as needed
                //   },
                // },
              }}
            />
            <pre className='cap'>* built with Chart.js</pre>
          </div>
        </div>



        {/* <Loader type="pacman" /> */}
        <Loader type="ball-scale-multiple" />
      </div>
    </>
  )
}

export default Skills
