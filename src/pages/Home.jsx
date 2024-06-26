import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'







function Home() {
  const [addStatus , setAddStatus] = useState([])
  const[dragStatus, setDragStatus] = useState(false)

  return (
    <div>
      <>
       <div className="d-flex mt-5 p-5">
        <Add setAddStatus={setAddStatus}/>
        <h5 className='ms-auto'><Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}><span id='h'>Watch</span> History<FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
       </div>
       <div className="row w-100">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View addStatus={addStatus} setDragStatus={setDragStatus}/>
        </div>
        <div className="col-md-3">
          <Category dragStatus={dragStatus} setDragStatus={setDragStatus}/>
        </div>
       </div>
      </>
    </div>
  )
}

export default Home