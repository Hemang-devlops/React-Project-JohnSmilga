import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNum = (num) => {
    if (num < 0) {
      return people.length - 1
    } else if (num > people.length - 1) {
      return 0
    } else {
      return num
    }
  };

  const changePerson = (change) => {
    if (change === 'prev') {
      setIndex(checkNum(index - 1))
    } else {
      setIndex(checkNum(index + 1))
    }
  }

  const randPerson = () => {
    let randNum;
    do {
      randNum = Math.floor(Math.random() * people.length);
    } while (randNum === index);

    setIndex(randNum);
  };



  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={() => changePerson('prev')}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={() => changePerson('next')}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={randPerson}>surprise me</button>
  </article>;
};

export default Review;
