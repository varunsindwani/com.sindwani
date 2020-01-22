import React from 'react';
import Image from './image';
import PropTypes from 'prop-types';

const Points = props =>  {
    return  (
        <div>
            <h1> • {props.desc[0]}</h1>
            <h1> • {props.desc[1]}</h1>
            <h1> • {props.desc[2]}</h1>
        </div>
    );
}

Points.propTypes = {
    desc: PropTypes.array,
};
  
Points.defaultProps = {
    desc: ['A really cool company to work at','A really cool company to work at','A really cool company to work at'],
};

export default Points;