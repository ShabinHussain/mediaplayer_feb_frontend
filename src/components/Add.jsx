import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Add({setAddStatus}) {
  //create a state to hold data from input field
  const[video, setVideo] = useState({
    caption:"",
    image:"",
    url:""
  })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setVideo({
      caption:"",
      image:"",
      url:""
    })

  };
  const handleShow = () => setShow(true);

  const validateLink = (e) =>{
    console.log(e.target.value);
    const Link = e.target.value
    console.log(typeof(Link));
    if(Link.endsWith('?feature=shared')){
      const yTkey = Link.slice(-26,-15)
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
  else if(Link.startsWith('https://www.youtu.be')){
      const yTkey = Link.slice(17,28)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})

  }
    else{
      const yTkey = Link.slice(-11)
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }


}


console.log(video);



const handleUpload = async(e) =>{
  e.preventDefault()

  const {caption, image, url}= video
  if(!caption || !image || !url){
    toast.info("please fill the form completely")
  }
  else{
    const result = await addVideoApi(video)
    console.log(result);

    if(result.status>=200 && result.status<300){
      toast.success('Video uploaded succesfully')
      setAddStatus(result.data)
      handleClose()
    }else{
      toast.success('Something went wrong')
      handleClose()

    }
   
  }
}
  

  //console.log(video);


  //https://www.youtube.com/watch?v=fWG3zrOvjMA
  //https://youtu.be/fWG3zrOvjMA?feature=shared
  //https://www.youtube.com/embed/fWG3zrOvjMA


  //<iframe width="706" height="397" src="https://www.youtube.com/embed/fWG3zrOvjMA" title="MEARN FEB 24 AMIYA NEW LINK 9 am | REACT DAY 16 - Media Player - part8  | 12/06/2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


  return (
    <>
    <div className="d-flex align-items-center">
        <h5 >Upload <span id='h'>new video</span></h5>
        <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size="xl" /></button>


    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption'  className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image'  className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text" placeholder='Video url'  className='form-control mt-3' onChange={(e)=>validateLink(e)}/>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>

    </>
  )
}

export default Add