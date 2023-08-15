import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import CssBaseline from '@mui/material/CssBaseline'
import CurrencyConverter from '../CurrencyConverter'
import {useEffect} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CurrencyConversionResult from '../CurrencyConversionResult'
import About from '../About'
import Contact from '../Contact'
import PageNotFound from '../PageNotFound'
import HistoricalData from '../HistoricalData'
import HistoricalDataResult  from '../HistoricalDataResult'


function App() {
  useEffect(() => {
    document.title = "Historical Data";  
  }, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/currencyconvertor' element={<CurrencyConverter />}>
            <Route index element = {<></>} />
            <Route path='result/:sourceCurrency/:targetCurrency/:amount' element = {<CurrencyConversionResult />} />
          </Route>
          <Route path='/historicaldata' element={<HistoricalData />}>
            <Route index element = {<></>} />
            <Route path='historical/:sourceHistorical/:targetHistorical/:dateHistorical' element = {<HistoricalDataResult />} />
          </Route>
      </Routes>
  </BrowserRouter>
  )
  }


  



export default App
