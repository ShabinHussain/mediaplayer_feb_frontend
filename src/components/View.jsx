import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getVideoApi, updateCategoryApi } from '../services/allApi'


function View({addStatus , setDragStatus}) {

  const[videoDetails,setVideoDetails] = useState([])
  const[deleteVideoStatus , setDeleteVideoStatus] = useState([])



  const getvideo  = async()=>{
    const result = await getVideoApi()
    setVideoDetails(result.data)
  }

  const DragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
   const{videoId, categoryId}= JSON.parse( e.dataTransfer.getData('dataShared'))
   console.log(videoId, categoryId);
   //get all category
   const {data} = await getAllCategoryApi()
   console.log(data);
   //get selected category
   const selectedCategory = data.find((item)=>item.id==categoryId)
   console.log(selectedCategory);
   //remove video from the selected category
   const result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

   const reqBody ={
    CategoryName: selectedCategory.CategoryName,
    allVideo: result,
    id:selectedCategory.id

   }

   await updateCategoryApi(categoryId,reqBody)
   setDragStatus(true)


  }

  useEffect(()=>{
    getvideo()
  },[addStatus,deleteVideoStatus])


  console.log(videoDetails);





  return (
     <Row className='W-100 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop ={(e)=>videoDrop(e)}>
      {videoDetails?.length>0?
      videoDetails.map((item)=>(<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>

       <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>

    </Col>))

   :

   <p className='text-warning fs-5 mt-4'>No video yet uploaded...</p>}

      

   

     </Row>
  )
}

export default View