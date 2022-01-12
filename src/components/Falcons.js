import React, {useEffect, useState} from 'react';
import Falcon from "./Falcon";

const Falcons = () => {
    let [launch , setLaunch] = useState([])
    useEffect(() => {
       fetch('https://api.spacexdata.com/v3/launches/')
           .then(value => value.json())
           .then(value => setLaunch(value))
    } , [])

    return (
         <div className='falcon-wrap'>
             {launch.map(value => <Falcon mission_name={value.mission_name} launch_year={value.launch_year}
                 mission_patch_small={value.links.mission_patch_small} />)}
        </div>
    );
};

export default Falcons;