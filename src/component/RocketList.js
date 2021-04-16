import React from 'react'
import axios from 'axios'
import RocketDetails from './RocketDetails'

const RocketList = ({rockets,rocketselect})=>{
    // console.log('myfun',props);
    // function pmyfun(){
    //     return 'abc'
    // }
    console.log('prop',rockets);
    const rocketProperties=(e)=>{
        console.log('rock props',e.rocket_name);
        
        <RocketDetails detials={e.rocket_name}/>
    }

    const rocket = rockets.map((rocket)=>{
        
        // console.log(rocket.rocket_name);
        return(<div onClick={()=>{
            rocketProperties(rocket)
            rocketselect(rocket)
            }}>
            {rocket.rocket_name}
        </div>)
    })
    
    return(
        <div>
            <div><h3>SpaceX rockets</h3></div>
            <div>
                {/* <button onClick={()=>rocketselect('abc')}>Click</button> */}
            {rocket}
            </div>
        </div>
    )

    
}

export default RocketList