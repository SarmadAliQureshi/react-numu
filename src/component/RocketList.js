import React from 'react'
import axios from 'axios'
import RocketDetails from './RocketDetails'

const RocketList = ({rockets})=>{
    console.log('prop',rockets);

    const rocket = rockets.map((rocket)=>{
        const rocketProperties=(e)=>{
            // console.log('rock props',e);
            <RocketDetails/>
        }
        console.log(rocket.rocket_name);
        return(<div onClick={rocketProperties}>
            {rocket.rocket_name}
        </div>)
    })
    
    return(
        <div>
            <div><h3>SpaceX Rockets</h3></div>
            <div>
            {rocket}
            </div>
        </div>
    )

    
}

export default RocketList