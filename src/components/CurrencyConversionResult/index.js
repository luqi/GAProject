import {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useLocation } from 'react-router-dom';
import "./index.css"

const API_KEY = process.env.REACT_APP_Currency_Converter_API_KEY

const CurrencyConversionResult = () => {
    const location = useLocation();
    const [conversionRate, setConversionRate] = useState(0)
    const [conversionResult, setConversionResult] = useState()
    const {sourceCurrency, targetCurrency, amount} = useParams()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrency}/${targetCurrency}/${amount}`)
        .then((res) => res.json())
        .then((data) => {setConversionRate(data.conversion_rate); setConversionResult(data.conversion_result); setIsLoading(false)})
        .catch(error => {
            console.error('Opps, something went wrong');
          })        
    }, [sourceCurrency, targetCurrency, amount])
    return !isLoading && conversionRate && conversionResult ?(
        <>  
        {/* retrieve state by using useLocation */}
        <div className='resultDiv'>
            <p id='p1result'>The exchange rate for {location.state.sourceCurrencyDetail} to {location.state.targetCurrencyDetail} is: {conversionRate}</p>
            <Divider variant="middle" />
            <p id='p1result'>{amount} {location.state.sourceCurrencyDetail} is equivalent to {conversionResult} {location.state.targetCurrencyDetail}</p>
            </div>
        </>
    ):(
            <Box sx={{ display: 'flex' }}>
                 <p>Loading</p>
                <CircularProgress />
            </Box>  
    )
    
}

export default CurrencyConversionResult