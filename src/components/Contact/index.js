import { useEffect } from 'react'
import Container from '@mui/material/Container'
import './index.css'
import ContactBox from './contactBox'
import HomeMenu from '../HomeMenu'

   
const Contact = () => {
  useEffect(() => {
    document.title = "Contact";  
  }, []);
    return (
      <div className='pageContainer'>
      <Container maxWidth='md' sx={{ textAlign: 'center'}}>
      <HomeMenu />
      <div className='contact'>
      <ContactBox></ContactBox>
      </div>
     </Container> 
     </div>
      )
  }
  
  export default Contact