import React from 'react';
import Image from './image';
import Points from './points';
import PropTypes from 'prop-types';

const WorkPanel = props =>  {
    return  (
        <div className="flex flex-row mt-4 mb-8">
            <div className="w-1/6 m-2">
                <Image filename={props.image} />
            </div>
            <div>
                <div className="flex flex-row flex-no-wrap">
                    <div className="font-bold text-white p-1 mr-40">
                        <h2 className="mb-1 mr-auto flex-no-wrap">{props.company}</h2>
                        <h2 className="mr-auto">{props.title}</h2>
                        
                    </div>

                    <div className="font-bold text-white p-1 ml-40 justify-end">
                        <h2 className="mb-1 ml-auto">{props.date}</h2>
                        <h2 className="">{props.location}</h2>
                    </div>
            </div>
            <div className="m-1">
                <h2>
                    <Points desc={props.desc} />
                </h2>
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