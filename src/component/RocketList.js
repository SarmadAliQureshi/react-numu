import React from 'react'
import axios from 'axios'
import RocketDetails from './RocketDetails'
import { List } from 'semantic-ui-react'

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

    const rocket = rockets.map((rocket,index)=>{
        
        // console.log(rocket.rocket_name);
        return(<List.Item className="my-list" as='li' key={index} onClick={(e)=>{
            // rocketProperties(rocket)
            rocketselect(rocket)
            e.preventDefault()
            window.history.pushState({},'','/details')

            const navEvent = new PopStateEvent('popstate')
            console.log('pop', navEvent)
            window.dispatchEvent(navEvent)
            }}>
            . &nbsp;&nbsp; {rocket.rocket_name}
        </List.Item>)
    })
    
    return(
        <div>
            <div><h3>SpaceX rockets</h3></div>
            <List as='ol' >
                {/* <button onClick={()=>rocketselect('abc')}>Click</button> */}
            {rocket}
            </List>
        </div>
    )

    
}

export default RocketList