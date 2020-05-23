import React from 'react';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';

const Quote = props =>  {
    return  (
        <div className="rounded flex flex-col md:flex-row shadow-lg p-8 m-12 max-w-2xl">
            <div className="w-1/3 flex flex-col mx-auto justify-between">
                <img 
                src={props.image}
                className="rounded-full w-full md:w-1/2 bg-green-500 mx-auto"
                />
                <h1 className="mx-auto text-center font-bold">{props.author}</h1>
                <h1 className="mx-auto text-center font-bold">{props.media}</h1>
            </div>
                <div className="w-full md:w-2/3 flex flex-col mx-auto" >
                <h1 className="mx-auto mt-4 md:mt-8 text-center">{props.quote}</h1>
            </div>
        </div>
    );
}

// Feature.propTypes = {
//     image: PropTypes.string,
//     company: PropTypes.string,
//     date: PropTypes.string,
//     title: PropTypes.string,
//     location: PropTypes.string,
//     desc: PropTypes.array,
//   };
  
// Feature.defaultProps = {
//     image: 'profile-pic.png',
//     company: 'Cool Company',
//     date: 'Summer 2020',
//     title: 'Software Engineer',
//     location: 'California, USA',
//     desc: ['A really cool company to work at'],
// };

export default Quote;