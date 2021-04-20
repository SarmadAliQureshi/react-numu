import React,{useEffect} from 'react'
import axios from 'axios'
import RocketList from './component/RocketList'
import LaunchList from './component/LaunchList'
import RocketDetails from './component/RocketDetails'
import Route from './component/Route'
import Header from './component/Header'
import LaunchDetails from './component/LaunchDetails'

class App extends React.Component{

    state = {rockets:[],launches:[],selectedRocket:[], selectedLaunch:[]}
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
    launchselect = (e)=>{
        console.log('selected Launch from app', e);
        this.setState({selectedLaunch:e})
    }
    componentDidUpdate(r,l){
        console.log('component updated1',r);
        // console.log('component updated2',l)
        // console.log('component updated3',this.state.selectedRocket)
        if (l.selectedRocket.id!=this.state.selectedRocket.id){
            return(<div>hahahi</div>)
        }
        // return(<div>hahahi</div>)
        this.checkForState(r)
    };

    
    // useEffect(()=>{},[selectedRocket])

    checkForState(){
    if('r'=='r'){
        return(<RocketDetails selectedRocket={this.state.selectedRocket}/>)
       }
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
                    <LaunchList launches = {this.state.launches} launchselect= {this.launchselect}/>
                </Route>
                {/* {<RocketDetails selectedRocket={this.state.selectedRocket}/>} */}
                {/* <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket} />
                </Route> */}
                <Route path='/details'>
                    {/* <LaunchDetails/> */}                    
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