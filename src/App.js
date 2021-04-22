import React,{useEffect} from 'react'
import axios from 'axios'
import RocketList from './component/RocketList'
import LaunchList from './component/LaunchList'
import RocketDetails from './component/RocketDetails'
import Route from './component/Route'
import Header from './component/Header'
import LaunchDetails from './component/LaunchDetails'

class App extends React.Component{

    state = {rockets:[],launches:[],selectedRocket:[], selectedLaunch:[], listClick:null,totallaunch:null,currentLaunch:null,launch_list:[],list_end:false}
    componentDidMount(){
        console.log('1st rendering'); 
        this.getRocketList()
        this.getLaunchList()
        this.setState({currentLaunch:10})   
    }
    async getRocketList(){
        const rocketList = await axios.get('https://api.spacexdata.com/v3/rockets')
        // console.log('rock', rocketList);
        this.setState({rockets:rocketList.data})
    }

    async getLaunchList(){
        const launchList = await axios.get('https://api.spacexdata.com/v3/launches',{
            params:{
                order:'desc'
            }
        })
        // const launchList = launch.get()
        console.log('rock', launchList ,this.state.currentLaunch);
        this.setState({totallaunch:launchList.data.length})
        this.setState({launch_list:launchList.data})
        var launch_list = launchList.data
        this.setState({launches:launch_list.slice(0,this.state.currentLaunch)})
    }
    rocketselect = (e) =>{
        console.log('Selected rocket from the app',e)
        this.setState({selectedRocket:e})
        this.setState({listClick:'rocket'})

    }
    launchselect = (e)=>{
        console.log('selected Launch from app', e , this.state.currentLaunch);
        this.setState({selectedLaunch:e})
        this.setState({listClick:'launch'})

    }

    constructor(props){
        super(props)
        this.loadmore=this.loadmore.bind(this)
    }
    loadmore(e){
        
        console.log('loadmore', e, this.state.totallaunch);
        var current_slice_1 =this.state.currentLaunch+10
        if(current_slice_1 < this.state.totallaunch){
            console.log(current_slice_1);
            this.setState({launches:this.state.launch_list.slice(0, current_slice_1)})
            this.setState({currentLaunch:current_slice_1})
            console.log( current_slice_1);
        }
        else{
            this.setState({list_end:true})
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
            <div className="ui container" >
                
                <Header/>
                <Route path='/'>
                    <RocketList rockets={this.state.rockets}  rocketselect={this.rocketselect}/>
                    <LaunchList launches = {this.state.launches} launchselect= {this.launchselect} loadmore={this.loadmore} list_end={this.state.list_end}/>
                </Route>
                {/* {<RocketDetails selectedRocket={this.state.selectedRocket}/>} */}
                {/* <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket} />
                </Route> */}
                <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket}
                     selectedLaunch={this.state.selectedLaunch} listClick={this.state.listClick} />
                </Route>

            </div>
        )
    
    }
}

export default App