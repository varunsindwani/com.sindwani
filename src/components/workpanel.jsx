import React from 'react';
import Image from './image';
import Points from './points';
import PropTypes from 'prop-types';

const WorkPanel = props =>  {
    return  (
        <div className="max-w-3xl flex flex-col sm:flex-row container font-main mt-16 md:px-8">
        <div>
          <img 
            src={props.image} 
            alt={props.company}
            className="w-12 h-12 md:mr-10 ml-auto mr-auto rounded-full"
            />
        </div>
        <div className="w-full">
          <div className="md:-mt-12 md:mb-4 -mt-20 mb-20">
            {props.header}
          </div>
          <div>
            <div className="flex flex-row w-full">
              <h1 className="font-bold mx-auto sm:mx-0 text-center sm:text-left">{props.company}</h1>
              <h1 className="ml-auto hidden sm:inline-block">{props.date}</h1>
            </div>
            <div className="flex flex-row w-full">
              <h1 className="font-bold mx-auto sm:mx-0 text-center sm:text-left">{props.title}</h1>
              <h1 className="ml-auto hidden sm:inline-block">{props.location}</h1>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <div>
             {props.desc}
            </div>
            <div className="mt-4 inline-block ml-auto mr-auto">{props.tags}</div>
          </div>
        </div>
      </div>
    );
}

WorkPanel.propTypes = {
    image: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    desc: PropTypes.array,
  };
  
WorkPanel.defaultProps = {
    image: 'profile-pic.png',
    company: 'Cool Company',
    date: 'Summer 2020',
    title: 'Software Engineer',
    location: 'California, USA',
    desc: ['A really cool company to work at'],
};

export default WorkPanel;