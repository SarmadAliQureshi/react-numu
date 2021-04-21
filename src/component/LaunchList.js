import React from 'react'
import './styles.css'

const LaunchList = ({launches,launchselect,loadmore})=>{
    // console.log('Lauches', launches);
    const launch = launches.map((launch,index)=>{
        // console.log(launch.mission_name);
        return(
            <div key={index} onClick={
                (e)=>{launchselect(launch)
                    e.preventDefault()
                    window.history.pushState({},'','/details')
        
                    const navEvent = new PopStateEvent('popstate')
                    console.log('pop', navEvent)
                    window.dispatchEvent(navEvent)
                }}>
                {launch.mission_name}
                
            </div>
        )
    })
    const  loadme = (e)=>{
        return loadmore(20)
    }

    return(
        <div>
            <div><h3>Launch List</h3></div>
            <div className='launch-list'>
            {launch}
            <button onClick={()=>{
                loadme()
                }}>Load More</button>
            </div>            
        </div>
    )
}

export default LaunchList