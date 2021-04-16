import React from 'react'
import axios from 'axios'
import RocketList from './component/RocketList'
import LaunchList from './component/LaunchList'
import RocketDetails from './component/RocketDetails'
import Route from './component/Route'
import Header from './component/Header'

class App extends React.Component{

    state = {rockets:[],launches:[],selectedRocket:[]}
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
    rocketselect = (e) =>{
        console.log('Selected rocket from the app',e)
        this.setState({selectedRocket:e})
    }
    
    render(){
        // const showRockets = ()=>{
        //     if(window.location.pathname==='/'){
        //         return <RocketList rockets={this.state.rockets}/>
        //     }
        // }
        // const showLaunches = ()=>{
        //     if(window.location.pathname==='/'){
        //         return <LaunchList launches = {this.state.launches}/>
        //     }
        // }
        // const rocketDetails = ()=>{
        //     if(window.location.pathname==='/details'){
        //         return <RocketDetails/>
        //     }
        // }
        
        return (
            <div>
                
                <Header/>
                <Route path='/'>
                    <RocketList rockets={this.state.rockets}  rocketselect={this.rocketselect}/>
                    <LaunchList launches = {this.state.launches}/>
                </Route>
                {/* {<RocketDetails selectedRocket={this.state.selectedRocket}/>} */}
                <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket}/>
                </Route>
                {/* {showRockets()}
                {showLaunches()}
                {rocketDetails()} */}
                {/* <RocketList rockets={this.state.rockets}/> */}
                {/* <LaunchList launches = {this.state.launches}/> */}
            </div>
        )
    
    }
}

export default App