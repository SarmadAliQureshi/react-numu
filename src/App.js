import React from 'react'
import RocketList from './component/RocketList'
import LaunchList from './component/LaunchList'
import axios from 'axios'

class App extends React.Component{

    state = {rockets:[],launches:[]}
    componentDidMount(){
        console.log('1st rendering'); 
        this.getRocketList()
        this.getLaunchList()   
    }
    async getRocketList(){
        const rocketList = await axios.get('https://api.spacexdata.com/v3/rockets')
        // console.log('rock', rocketList);
        this.setState({rockets:rocketList.data})
    }

    async getLaunchList(){
        const launchList = await axios.get('https://api.spacexdata.com/v3/launches',{
            params:{
                limit:10,
                order:'desc'
            }
        })
        // const launchList = launch.get()
        console.log('rock', launchList);
        this.setState({launches:launchList.data})
    }

    render(){
    return (
        <div>
            <RocketList rockets={this.state.rockets}/>
            <LaunchList launches = {this.state.launches}/>
        </div>
    )
    
    }
}

export default App