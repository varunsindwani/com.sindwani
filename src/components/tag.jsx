import React from 'react';

const Tag = props =>  {
    
    return  (
        <span className="text-xs rounded-lg border-2 border-blue-400 mr-2 px-2 py-1 flex font-main font-bold inline-block">
            <img 
              src={props.image}
              alt={props.tag}
              className="w-4 h-auto mr-0 sm:mr-1"
              /> 
              <h1 className="">{props.tag}</h1>
        </span>
    );
}

export default Tag;