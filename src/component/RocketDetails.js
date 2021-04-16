import React from 'react'

const RocketDetails = ({selectedRocket})=>{
    
    console.log('RocketDetails',selectedRocket);
    return(<div>
        Rocket details is
        <br></br>
        {selectedRocket.rocket_name}
    </div>)
}

export default RocketDetails
