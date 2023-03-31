import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';  // DO NOT IMPORT FROM firebase/firestore/lite
import { db } from '../../firebase';
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {  // call getPortfolio HOOK using useEffect()
        getPortfolio();
    }, []);

    // connected to firebase
    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        // console.log(querySnapshot);
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));  // querySnapshots gets the array of firebase collections
    }
    console.log(portfolio)


    /* 
    The renderPortfolio function first filters the portfolio array for items with an image property using filter(). 
    This gives us an array of items from Firebase. We then use slice() and reverse() to create a new reversed array from the 
    portfolioData array. We then merge these two arrays using the spread operator (...) and store the result in mergedPortfolio.

    We then map over mergedPortfolio and render each item's image and content based on whether it has an image or cover property. 
    The image items are rendered first, followed by the cover items in reverse order.
    */
    // make this a new component to reference
    const renderPortfolio = (portfolio) => {
      const firebasePortfolio = portfolio.filter((port) => port.image);
      const jsonPortfolio = portfolioData.portfolio.slice().reverse();
      const mergedPortfolio = [...firebasePortfolio, ...jsonPortfolio];
        return (
          <div className="images-container">
            {mergedPortfolio.map((port, idx) => {
              return (
                <div className="image-box" key={idx}>
                  {port.cover && (  // if its json data
                    <>
                      <img
                        src={port.cover}
                        className="portfolio-image"
                        alt="portfolio"
                      />
                      <div className="content">
                        <p className="title">{port.title}</p>
                        <h4 className="description">{port.desc}</h4>
                        <button
                          className="btn"
                          onClick={() => window.open(port.url)}
                        >
                          View
                        </button>
                      </div>
                    </>
                  )}                  
                  ({port.image && ( // if it's firebase
                    <>
                      <img
                        src={port.image}
                        className="portfolio-image"
                        alt="portfolio"
                      />
                      <div className="content">
                        <p className="title">{port.name}</p>
                        <h4 className="description">{port.description}</h4>
                        <button
                          className="btn"
                          onClick={() => window.open(port.url)}
                        >
                          View
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div> // TODO: fix reverse order 
        );
      };
    

        /* 

      */

    return (
        // React.Fragment short syntax
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">

                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <p>
                        "The only way to make sense out of change is to plunge into it,
                        move with it, and join the dance." ~ Alan Watts
                    </p>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    );
}

export default Portfolio;