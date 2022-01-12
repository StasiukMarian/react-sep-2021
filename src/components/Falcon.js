import React from 'react';

const Falcon = (props) => {
    let {mission_name , launch_year ,mission_patch_small} = props;
    let falconName = 'falcon-card'
    return (
        <div className={falconName}>
            <div className='info'>
                <h1>{mission_name}</h1>
                <div>{launch_year}</div>
            </div>
            <img src={mission_patch_small} alt="falcon-logo"/>
        </div>
    );
};

export default Falcon;