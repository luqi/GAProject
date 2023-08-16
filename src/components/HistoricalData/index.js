import {useState, useEffect} from 'react'
import { useNavigate, Outlet} from 'react-router-dom'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import HomeMenu from '../HomeMenu'
// import './index.css'


const HistoricalData = () => {

    const navigate = useNavigate()

  // historical data
    const currencyHistoricalRate= [
      {label: 'USD', name: 'US Dollar'},
      {label: 'AUD', name: 'Australian Dollar'},
      {label: 'CAD', name: 'Canadian Dollar'},
      {label: 'EUR', name: 'Euro'},
      {label: 'HKD', name: 'HK Dollar'},
      {label: 'INR', name: 'Indian Rupee'},
      {label: 'JPY', name: 'Japanese Yen'},
      {label: 'SGD', name: 'Singapore Dollar'},
      {label: 'GBP', name: 'Pound'},
      {label: 'CNY', name: 'Chinese Yuan'},
      {label: 'NZD', name: 'New Zealand Dollar'}
    ]

    const [sourceHistorical, setSourceHistorical] = useState('')
    const [targetHistorical, setTargetHistorical] = useState('')
    const [dateHistorical, setDatehistorical] = useState('')

      useEffect(() => {
        document.title = "Historic Data";  
      }, []);
    

      const handleHistoricalSubmit = (e) => {
        e.preventDefault()
        navigate(`historical/${sourceHistorical}/${targetHistorical}/${dateHistorical}`)
      }



    return (
      <div className='pageContainer'>
        <Container maxWidth='md' style={{ textAlign: 'center',position: "flex", justifyContent: "center", alignItems:"center"}}>
            <Container maxWidth='md' sx={{ textAlign: 'center'}}>
              <HomeMenu/>
            </Container> 
        <Container maxWidth='md' style={{ textAlign: 'center',position: "flex", justifyContent: "center", alignItems:"center"}}>
            <h1>Historic Exchange Rate</h1>
            <p>Build a historic rate chart with your chosen base and target currencies</p>
            <form onSubmit={handleHistoricalSubmit}>
                <Stack direction='row'
					          alignItems='center'
					        justifyContent='center'
					        spacing={2}
                >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={currencyHistoricalRate}
                        getOptionLabel={(currencyList) => String(currencyList.label)+ ", " + String(currencyList.name)}
        
                        onChange={(event, newValue) => {
                          if (newValue != null ){
                            setSourceHistorical(newValue.label)
                          }
                          }}
                        // value = {sourceHistorical}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="From Currency" />}
                    />
                    <DoubleArrowIcon />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={currencyHistoricalRate}
                        getOptionLabel={(currencyList) => String(currencyList.label)+ ", " + String(currencyList.name)}
                        onChange={(event, newValue) => {
                          if (newValue != null ){
                            setTargetHistorical(newValue.label)
                          }
                          }}
                        // value = {targetHistorical}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="To Currency" />}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs} required>
                       <DatePicker format="DD-MM-YYYY" onChange = {(newValue) => setDatehistorical(newValue)} label='From Date'/>
                       <DoubleArrowIcon />
                       <DatePicker format="DD-MM-YYYY" label='From Date'/>
                    </LocalizationProvider>
                <Button type='submit' variant="outlined">Search</Button>
            </Stack>
            </form>
        </Container>
        <Outlet />
        </Container>
        </div>
    )

}

export default HistoricalData


