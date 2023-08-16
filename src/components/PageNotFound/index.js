import { useEffect } from 'react'
import Container from '@mui/material/Container'
import HomeMenu from '../HomeMenu'

import './index.css'


const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";  
  }, []);
    return (
      <div className='pageContainer'>
      <Container maxWidth='md' sx={{ textAlign: 'center'}}>
      <HomeMenu />
      <div>
        <p>Sorry, this page does not exist!</p>
      </div>
      </Container>  
      </div>
      
    )
    
  }
  
  export default PageNotFound