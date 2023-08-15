import { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeIcon from '@mui/icons-material/Home'
import './index.css'
import ContactBox from './contactBox'
import HistoryIcon from '@mui/icons-material/History';

   
const Contact = () => {
  useEffect(() => {
    document.title = "Contact";  
  }, []);
    return (
      <div className='pageContainer'>
      <Container maxWidth='md' sx={{ textAlign: 'center'}}>
      <NavLink to="/" style = {{marginRight: 10}}><HomeIcon /> Home</NavLink>
      {' | '}
      <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
      {' | '}
      <NavLink to="/historicaldata"><HistoryIcon /> Historical Data</NavLink>
      {' | '}
      <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
      {' | '}
      <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
      <div className='contact'>
      <ContactBox></ContactBox>
      </div>
     </Container> 
     </div>
      )
  }
  
  export default Contact