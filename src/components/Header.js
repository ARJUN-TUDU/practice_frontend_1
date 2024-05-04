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
            <Container>

            <Row>
                <Col lg = {6} style = {{backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"center"}}>
                 <div>
                 Welcome to This kind of measurement
                  <p>we all have been waiting for this</p>
                 </div>
                </Col>
                <Col lg = {6}  style = {{backgroundColor:"" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
                   <div style = {{height:"250px",width:"100%"}}>
                   <img src = {require("../image.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover"}}  />
                   </div>
                </Col>
            </Row>

            </Container>
        </div>

    </div>
  )
}

export default Header