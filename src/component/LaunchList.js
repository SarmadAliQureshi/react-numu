import React from 'react'
import './styles.css'
import { List } from 'semantic-ui-react'


const LaunchList = ({launches,launchselect,loadmore,list_end})=>{
    // console.log('Lauches', launches);
    const launch = launches.map((launch,index)=>{
        // console.log(launch.mission_name);
        return(
            <div className="item abc my-list"  key={index} onClick={
                (e)=>{launchselect(launch)
                    e.preventDefault()
                    window.history.pushState({},'','/details')
        
                    const navEvent = new PopStateEvent('popstate')
                    console.log('pop', navEvent)
                    window.dispatchEvent(navEvent)
                }}>
                . &nbsp;&nbsp;{launch.mission_name}
                
            </div>
        )
    })
    const  loadme = (e)=>{

        return loadmore(20)
    }

    return(
        <div style={{marginTop:'20px'}}>
            <div><h3>Launch List</h3></div>
            <div className="ui ordered list">
            {launch}
            <button className="ui button"  style = {{marginTop:'10px'}} disabled={list_end} onClick={()=>{
                loadme()
                }}>Load More</button>
            </div>            
        </div>
    )
}

export default LaunchList