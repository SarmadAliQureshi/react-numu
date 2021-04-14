import React from 'react'
import axios from 'axios'

const RocketList = ({rockets})=>{
    console.log('prop',rockets);
    const rocket = rockets.map((rocket)=>{
        console.log(rocket.rocket_name);
        return(<div>
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