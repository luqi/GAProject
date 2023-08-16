import { NavLink } from "react-router-dom"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HistoryIcon from '@mui/icons-material/History'
import OtherHousesIcon from '@mui/icons-material/OtherHouses'

const HomeMenu = () => {
    return(
        <>
            <NavLink to="/"><OtherHousesIcon /> Home </NavLink>
             {' | '}
            <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
             {' | '}
             <NavLink to="/historicaldata"><HistoryIcon /> Historic Data</NavLink>
             {' | '}
             <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About/Help </NavLink>
             {' | '}
             <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
        </>
    )
}

export default HomeMenu