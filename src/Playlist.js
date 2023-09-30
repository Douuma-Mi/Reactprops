import React from 'react'
import Cart from './Card'
import data from './Play'
function Playlist() {
  return (
    <div  className='parent'  >
     { data.map((el)=><Cart props={el} />)  }
    </div>
  )
}

export default Playlist