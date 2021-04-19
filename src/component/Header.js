import React from 'react'
import Link from './Link'

const Header = ()=>{
    return (<div class="ui secondary pointing menu">
        <Link className=" item" href="/">Main Menu</Link>
        <Link className="item" href="/details">Details</Link>
    </div>)
}

export default Header