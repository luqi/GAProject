import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HistoryIcon from '@mui/icons-material/History';
import {useEffect} from 'react'
import './index.css';

import TableAUD from "./Table"

const HomePage = () => {
    useEffect(() => {
        document.title = "Home";  
      }, []);
    return (
     <div className="homepage">

     
         <Container maxWidth='md' sx={{ textAlign: 'center'}}>
             <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
             {' | '}
             <NavLink to="/historicaldata"><HistoryIcon /> Historical Data</NavLink>
             {' | '}
             <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
             {' | '}
             <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
             <h1>Welcome to My Website</h1>
             <TableAUD className="table"></TableAUD>
        </Container>   
        <button className="floating-button" onClick={()=>{

                window.scrollTo({
                    top: 0
                })
            
        }}> Top</button>
        <div className="footer"></div>
        </div>
   )    
}

export default HomePage