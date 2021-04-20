import React from 'react'

const RocketDetails = ({selectedRocket})=>{

    
    console.log('RocketDetails',selectedRocket,  window.location);
    if (selectedRocket){
    return(<div>
        <br></br>
        <h3>{selectedRocket.rocket_name}</h3>
        <br></br>
        <h5>Brief Description :</h5> {selectedRocket.description}
        <br></br>
        <h5>Rocket Details:</h5> 
        <br></br>
        <b>First Flight : </b>{selectedRocket.first_flight}
        <br></br>
        <b>Dimension</b> : Diameter={selectedRocket.diameter.feet} feet, Height ={selectedRocket.height.feet} feet,
        Weight = {selectedRocket.mass.kg}kg
    </div>)
    }
    // else if (launchselect)
}

export default RocketDetails
