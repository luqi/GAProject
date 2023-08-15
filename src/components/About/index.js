import { useEffect } from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History';
import './index.css'


const About = () => {
  useEffect(() => {
    document.title = "About";  
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
      <div className='aboutus'>
      <p>We support all 161 commonly circulating world currencies listed below. These cover 99% of all UN recognized states and territories.</p>
      
      </div>
      </Container>  
      </div>
      
    )
    
  }
  
  export default About