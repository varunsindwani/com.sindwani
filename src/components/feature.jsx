import React from 'react';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';

const Feature = props =>  {
    //add blur filter to image
    var bg = {
        backgroundImage: `url(${props.image})`,
        // filter:`blur(1px)`,
    }

    return  (
        <a href={props.link} className="w-full max-w-3xl mb-8 font-main">
            <div className=" hover:opacity-100 rounded text-center overflow-hidden">
                <div
                className="py-40 inline-block transform hover:scale-105 transition 
                ease-out duration-700 w-full mx-auto bg-no-repeat bg-cover bg-center"
                style={bg}>
                    <div className="w-full text-black text-6xl font-bold absolute shadow -m-8 text-center mx-auto text-white">{props.title}</div>
                </div>
            </div>
        </a>
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

export default Feature;