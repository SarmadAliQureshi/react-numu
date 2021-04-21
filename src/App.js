import React,{useEffect} from 'react'
import axios from 'axios'
import RocketList from './component/RocketList'
import LaunchList from './component/LaunchList'
import RocketDetails from './component/RocketDetails'
import Route from './component/Route'
import Header from './component/Header'
import LaunchDetails from './component/LaunchDetails'

class App extends React.Component{

    state = {rockets:[],launches:[],selectedRocket:[], selectedLaunch:[], listClick:null,totallaunch:0,currentLaunch:null}
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
                limit:20,
                order:'desc'
            }
        })
        // const launchList = launch.get()
        console.log('rock', launchList ,this.state.currentLaunch);
        this.setState({totallaunch:launchList.data.length})
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
    // componentDidUpdate(r,l){
    //     console.log('component updated1',r);
    //     // console.log('component updated2',l)
    //     // console.log('component updated3',this.state.selectedRocket)
    //     if (l.selectedRocket.id!=this.state.selectedRocket.id){
    //         return(<div>hahahi</div>)
    //     }
    //     // return(<div>hahahi</div>)
    //     this.checkForState(r)
    // };

    
    // // useEffect(()=>{},[selectedRocket])

    // checkForState(r){
    // if('r'==r){
    //     console.log('chk state');
    //     return(<RocketDetails selectedRocket={this.state.selectedRocket}/>)
    //    }
    // }
    nextPage(){ 

    }
    constructor(props){
        super(props)
        this.loadmore=this.loadmore.bind(this)
    }
    loadmore(e){
        console.log('loadmore', e);
        // var state = this.state.currentlaunch
        this.setState({currentLaunch:20})
        console.log(this.state.currentLaunch);
        
        // var state = state+10
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
                    <LaunchList launches = {this.state.launches} launchselect= {this.launchselect} loadmore={this.loadmore}/>
                </Route>
                {/* {<RocketDetails selectedRocket={this.state.selectedRocket}/>} */}
                {/* <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket} />
                </Route> */}
                <Route path='/details'>
                    <RocketDetails selectedRocket={this.state.selectedRocket}
                     selectedLaunch={this.state.selectedLaunch} listClick={this.state.listClick} />
                </Route>
                {/* {showRockets()}
                {showLaunches()}
                {rocketDetails()} */}
                {/* <RocketList rockets={this.state.rockets}/> */}
                {/* <LaunchList launches = {this.state.launches}/> */}
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    
    }
}

export default App