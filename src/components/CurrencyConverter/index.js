import {useState, useEffect} from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import HomeMenu from '../HomeMenu'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './index.css'

const API_KEY = process.env.REACT_APP_Currency_Converter_API_KEY

const CurrencyConverter = () => {

  // currency conversion
    const [sourceCurrencyList, setSourceCurrencyList] = useState([])
    const [targetCurrencyList, setTargetCurrencyList] = useState([])
    const [sourceCurrency, setSourceCurrency] = useState('')
    const [sourceCurrencyDetail, setSourceCurrencyDetail] = useState('')
    const [targetCurrency, setTargetCurrency] = useState('')
    const [targetCurrencyDetail, setTargetCurrencyDetail] = useState('')
    const [amount, setAmount] = useState()
    const navigate = useNavigate()

    const fetchCurrencyList = () => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
          .then(response => response.json())
          .then(data => {
            setSourceCurrencyList(data.supported_codes); setTargetCurrencyList(data.supported_codes)
          })
          .catch(error => {
            console.error('Opps, something went wrong');
          })
      }
      useEffect(() => {
        document.title = "Currency Converter";  
      }, []);
      useEffect(() => {
        fetchCurrencyList()
        // eslint-disable-next-line
      }, [])

      const handleInputChange = (e) => {
        setAmount(e.target.value)
      }

      const handleConverstionSubmit = (e) => {
		      e.preventDefault()
          // pass props and state to the result component
		      navigate(`result/${sourceCurrency}/${targetCurrency}/${amount}`, { state: { sourceCurrencyDetail: sourceCurrencyDetail, targetCurrencyDetail: targetCurrencyDetail}  })
	    }



    return (
      <div className='pageContainer'>
        <Container maxWidth='md' style={{ textAlign: 'center',position: "flex", justifyContent: "center", alignItems:"center"}}>
            <Container maxWidth='md' sx={{ textAlign: 'center'}}>
              <HomeMenu />
            </Container>  
            <h1>Currency Converter</h1>
            <form onSubmit={handleConverstionSubmit}>
                <Stack direction='row'
					          alignItems='center'
					        justifyContent='center'
					        spacing={2}
                >
                    <TextField id="outlined-basic" color="primary" label="From Amount" variant="outlined" value={amount} type ='number' min='1' onChange={(e) => handleInputChange(e)} required/> 
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={sourceCurrencyList}
                        getOptionLabel={(currencyList) => String(currencyList[0])+ ", " + String(currencyList[1])}
                        onChange={(event, newValue) => {
                          if (newValue != null ){
                            setSourceCurrency(newValue[0])
                            setSourceCurrencyDetail(newValue[1])
                          }
                          }}
                        // value = {sourceCurrency}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="From Currency" />}
                        required />
                    <DoubleArrowIcon />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={targetCurrencyList}
                        getOptionLabel={(currencyList) => String(currencyList[0])+ ", " + String(currencyList[1])}
                        onChange={(event, newValue) => {
                          if (newValue != null ){
                            setTargetCurrency(newValue[0])
                            setTargetCurrencyDetail(newValue[1])
                          }
                          }}
                        // value = {targetCurrency}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="To Currency" />}
                        required />  
                <Button type='submit' variant="outlined">Convert</Button>
            </Stack>
            </form>
            <Outlet />
            </Container>
        </div>
    )

}

export default CurrencyConverter
