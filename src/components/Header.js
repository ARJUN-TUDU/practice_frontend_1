import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'


const Header = () => {
  return (


    <div className='rrr' style = {{
       
        width:"100%",
        height:"70vh",
        position:"relative",
        
        
        


    }} >

        <img className='header_image'  src = {require("../image.jpg")} style = {{width:"100%",height:"100%",position:"absolute"}} />
        <div style = {{position:"absolute",width:"100%",height:"auto",display:"grid",placeItems:"center",marginTop:"10vh"}}>
            <Container style = {{margin:"auto",width:"100%"}} >

            <Row>
                <Col lg = {6} style = {{backgroundColor:"",height:"",display:"flex",alignItems:"center"}}>
                 <div style = {{}} >
                 Welcome to This kind of measurement
                  <p>we all have been waiting for this</p>
                  <button>dwadwa</button>
                 </div>
                </Col>
                
            </Row>

            </Container>
        </div>

    </div>
  )
}

export default Header