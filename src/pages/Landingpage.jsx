import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';






function Landingpage() {
  return (
    
      
      <>
      
      <div className='row mt-5 w-100 justify-content-center align-items-center'>
        <div className="col-md-1"></div>
        
        <div className="col-md-5 p-5">
          <h3>Welcome to<span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vitae magni. Quos iusto labore ratione assumenda laboriosam omnis nam quam, provident quidem asperiores tenetur vel excepturi nobis minus ea eum!Sit a harum quibusdam? Dolore, iste sed placeat odit vero nobis officia, corrupti aspernatur inventore, illo debitis nam deserunt animi recusandae magnam aliquam ipsa maxime exercitationem accusantium distinctio doloremque rem?Aliquam corrupti iure dolore animi quia numquam eligendi officia commodi earum porro inventore perferendis, assumenda quo voluptate explicabo vitae cupiditate saepe, dolor</p>

          <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>

        <div className="col-md-1"></div>


        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75'/>
        </div>



      </div>

      <div className='row mt-5 w-100'>
        <h3 className='mt-5 text-center mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>

        <div className="col-md-3 px-5 px-md-4 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  

        </div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  
  
 
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/b7/a3/02/b7a3029dfb871cdee19dfe502a3b3776.gif" className='w-100'height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  
  

        </div>

        <div className="col-md-1"></div>

      </div>


      <div className='row w-100 mt-5 p-4 ms-1 ms-md-0 p-md-0'>
        <div className='col-md-1'></div>
        <div className='col-md-9 border p-5 rounded m-md-5'>
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reiciendis animi, laborel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque minima ipsum ea odio</p>
              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reiciendis animi, laborel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque minima ipsum ea odio</p>
              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reiciendis animi, laborel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque minima ipsum ea odio</p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_Yhyp-_hX2s" title="Eminem - Lose Yourself [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>


        </div>
        <div className='col-md-2'></div>


      </div>
      
      </>
    
    
    
  )
}

export default Landingpage