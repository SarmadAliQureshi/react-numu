import React from 'react'


const Link = ({className,href,children})=>{
    const clickEvent = (e)=>{
        console.log(e);
        e.preventDefault()
        // window.location.href='/details'
        window.history.pushState({},'',href)

        const navEvent = new PopStateEvent('popstate')
        console.log('pop', navEvent)
        window.dispatchEvent(navEvent)
    
    }
    // console.log(props);
    // props.map((item)=>{
    //     console.log(item);
    // })
    return(<a className={className}  href={href} onClick={(e)=>{clickEvent(e)}}>{children}</a>)
}

export default Link