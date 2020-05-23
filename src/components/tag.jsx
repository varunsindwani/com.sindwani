import React from 'react';

const Tag = props =>  {
    
    return  (
        <div className="text-xs rounded-lg border-2 border-blue-400 mr-2 px-2 py-1 flex font-main font-bold">
            <img 
              src={props.image}
              alt={props.tag}
              className="w-4 h-auto mr-1"
              /> 
              {props.tag}
        </div>
    );
}

export default Tag;