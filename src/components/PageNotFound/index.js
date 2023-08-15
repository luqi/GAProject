import { useEffect } from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History';
import './index.css'


const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";  
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
      <div className='pagenotfound'>
        <p>Sorry, this page does not exist!</p>
      </div>
      </Container>  
      </div>
      
    )
    
  }
  
  export default PageNotFound