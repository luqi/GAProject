import {useState, useEffect} from 'react'
import { useNavigate, NavLink, Outlet} from 'react-router-dom'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeIcon from '@mui/icons-material/Home'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
        document.title = "Historical Data";  
      }, []);
    

      const handleHistoricalSubmit = (e) => {
        e.preventDefault()
        navigate(`historical/${sourceHistorical}/${targetHistorical}/${dateHistorical}`)
      }



    return (
      <div className='pageContainer'>
        <Container maxWidth='md' style={{ textAlign: 'center',position: "flex", justifyContent: "center", alignItems:"center"}}>
            <Container maxWidth='md' sx={{ textAlign: 'center'}}>
              <NavLink to="/" style = {{marginRight: 10}}><HomeIcon /> Home</NavLink>
              {' | '}
              <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
              {' | '}
              <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
              {' | '}
              <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
            </Container> 
        <Container maxWidth='md' style={{ textAlign: 'center',position: "flex", justifyContent: "center", alignItems:"center"}}>
            <h1>Historical Exchange Rate</h1>
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
                       <DatePicker format="DD-MM-YYYY" onChange = {(newValue) => setDatehistorical(newValue)}/>
                       <DatePicker format="DD-MM-YYYY" />
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


