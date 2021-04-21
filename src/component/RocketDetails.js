import React from 'react'

const RocketDetails = ({selectedRocket,selectedLaunch,listClick})=>{

    
    console.log('RocketDetails',selectedRocket,  selectedLaunch,listClick);
    if (listClick=='rocket'){
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
    else if (listClick=='launch'){
        return(
            <div>
            <br></br>
            <h3>{selectedLaunch.mission_name}</h3>
            <br></br>
            <h5>Launch Details </h5>
            <br></br>
            <b>Flight Number : </b>{selectedLaunch.flight_number}
            <br></br>
            <b>Launch Date : </b>{selectedLaunch.launch_date_utc}
            <br></br>
            <b>Launch Site Name : </b>{selectedLaunch.launch_site.site_name_long}
            <br></br>
            <b>Rocket Used : </b>{selectedLaunch.rocket.rocket_name}
            <br></br>
        </div>
        )
    }
    else{
        return(<div>Please select rocket/launch from the Main Menu</div>)
    }
}

export default RocketDetails
