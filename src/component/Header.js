import React from 'react'
import Link from './Link'
import './styles.css'

const Header = ()=>{
    return (<div class="ui secondary pointing menu">
        <Link className=" my-head item" href="/">Main Menu</Link>
        <Link className=" my-head  item" href="/details">Details</Link>
    </div>)
}

export default Header