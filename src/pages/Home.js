import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'

const Home = () => {
  
  return (
    <div> 
          
          <Header/>

          <section>
 
           <Container className = "push_down" style =  {{display:"flex",width:"100%",backgroundColor:"",marginTop:"50px"}} >
              
                    <button>dwa</button>
                    <button>dwa</button>
                    <button>dwa</button>

           </Container>

          </section>
    </div>
  )
}

export default Home