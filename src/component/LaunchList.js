import React from 'react'

const LaunchList = ({launches,launchselect})=>{
    // console.log('Lauches', launches);
    const launch = launches.map((launch)=>{
        // console.log(launch.mission_name);
        return(
            <div onClick={()=>{launchselect(launch)}}>
                {launch.mission_name}
            </div>
        )
    })
    return(
        <div>
            <div><h3>Launch List</h3></div>
            <div>
            {launch}
            </div>            
        </div>
    )
}

export default LaunchList