import React from 'react';

import Image from './image';

const WorkPanel = () =>  {
    return  (
        <div className="flex flex-row">
            <div className="w-1/6 m-2">
                <Image filename="profile-pic.png" />
            </div>
            <div>
                <div className="flex flex-row font-bold text-white p-1">
                    <h2>Airgate Technologies</h2>
                    <h2 className="ml-auto">Summer 2019</h2>
                </div>

                <div className="flex flex-row font-bold text-white p-1">
                    <h2>Cloud Engineer Intern</h2>
                    <h2 className="ml-auto">Vaughn, ON</h2>
                </div>

                <div className="p-1">
                    <h2>
                        Spent a semester studing art history, French, fashion and interior design in the 6th 
                        arrondissement of Paris. Additional recreational coursework in French cooking, wine 
                        tasting, and cheese pairing.
                    </h2>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default WorkPanel;