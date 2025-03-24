import React from 'react'

export default function Nav() {

    function click(){
        console.log("hit the navs")
    }


return(
    <div onClick={click} className=''>
        my navs
    </div>
)

}