import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import "./table.css"

const API_KEY = process.env.REACT_APP_Currency_Converter_API_KEY;

const TableAUD = () => {
    const [conversionRates, setConversionRates] = useState([]);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
            .then(response => response.json())
            .then(data => {
                const supportedCodes = data.supported_codes;
                fetchConversionRates(supportedCodes);
            })
            .catch(error => {
                console.error('Oops, something went wrong');
            });
    }, []);

    const fetchConversionRates = (codes) => {
        const baseCurrency = 'AUD';
        const conversionRequests = codes.map(code => {
            return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${baseCurrency}/${code[0]}`)
                .then(response => response.json());
        });

        Promise.all(conversionRequests)
            .then(data => {
                setConversionRates(data);
            })
            .catch(error => {
                console.error('Oops, something went wrong while fetching conversion rates');
            });
    };
    const currentDate = new Date();

    // Get the current date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so adding 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format the date and time as a string
    const currentDateTime = `${year}-${month}-${day} ${hours}:${String(minutes).padStart(2, '0')}:${seconds} Sydney/Melbourne`
    return (
        <div className='tableContainer'>
        <Container maxWidth='md' sx={{ textAlign: 'center', paddingTop: '20px', marginBottom:"10px" }}>
            <h2>Live Exchange Rates</h2>
            <p>Last Update: {currentDateTime}</p>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Currency</TableCell>
                            <TableCell>Conversion Rate (1 AUD)</TableCell>
                            <TableCell>Change</TableCell>
                            <TableCell>Chart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log(conversionRates)}
                        {conversionRates.map((rate, index) => (
                            <TableRow key={index}>
                                <TableCell>{rate.target_code}</TableCell>
                                <TableCell>{rate.conversion_rate}</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </div>
    );
};

export default TableAUD;
