import Container from '@mui/material/Container'
import {useEffect} from 'react'
import Divider from '@mui/material/Divider'
import HomeMenu from '../HomeMenu'
import './index.css';

import TableAUD from "./Table"

const HomePage = () => {
    useEffect(() => {
        document.title = "Home";  
      }, []);
    return (
     <div className="homepage">
         <Container maxWidth='md' sx={{ textAlign: 'center'}}>
             <HomeMenu />
             <h1>Global Currency Converter & Money Transfer Solutions</h1>
             <Divider variant="middle" />
             <p>Source for currency conversion, sending money and tracking exchange rates</p>
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