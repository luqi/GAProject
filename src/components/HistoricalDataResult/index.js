import {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
// import CircularProgress from '@mui/material/CircularProgress'
// import Box from '@mui/material/Box'
// import Divider from '@mui/material/Divider'


const API_KEY = process.env.REACT_APP_Currency_Historical_Data_API_KEY

const HistoricalDataResult = () => {
    
    const {sourceHistorical, targetHistorical, dateHistorical} = useParams()
    const {results, setResults} = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    // convert data got from date picker to the requested format
    const date = new Date(dateHistorical)
    const formattedDate = date.getFullYear() + "-" + String((date.getMonth()+1)).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0')
    

    useEffect(() => {
        // setIsLoading(true)
        fetch(`https://api.currencybeacon.com/v1/historical?api_key=${API_KEY}&base=${sourceHistorical}&date=${formattedDate}&symbols=${targetHistorical}`)
        .then((res) => res.json())
        .then((data) => {
            setResults(data.response.date)
          })
        .catch(error => {
            console.error('Opps, something went wrong');
          })  // eslint-disable-next-line      
    }, [sourceHistorical, targetHistorical, dateHistorical])
    return (
        <>
            <p>{results}this function is not completed, however, all props passed from HistoricalData Component. A chart with historical data is expected, however, API is not available</p>
        </>
    )
    
}

export default HistoricalDataResult