import React from 'react'
import Announcement from './Announcement'
import LeftbarCategory from './LeftbarCategory'
import Stock from './Stock'

function Leftbar (){
    return (
        <>
        <Stock />
        <LeftbarCategory />
        <Announcement />
        </>
    )
}

export default Leftbar