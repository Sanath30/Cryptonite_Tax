import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ComponentSkeleton from './ComponentSkeleton';
import TradeViewChart from 'react-crypto-chart';
import Search from './Search';

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const API_KEY = 'CG-WqRtSzJYz8VGRY5ZGTEAUTyi';
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
    const options = {
      method: 'GET',
      headers: {
        'x-cg-demo-api-key': API_KEY
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setCryptoData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCoinClick = (coin) => {
    if (selectedCoin && selectedCoin.id === coin.id) {
      setSelectedCoin(null);
    } else {
      setSelectedCoin(coin);
    }
  };

  const handleChange = (value) => {
    setSearch(value);
    setSelectedCoin(null);
  };

  const filteredCoins = cryptoData.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ComponentSkeleton>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Left side - list of available cryptocurrencies */}
        <Box sx={{ flex: 1, marginRight: '20px', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
          <Search onChange={handleChange} />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCoins.map((coin) => (
                  <TableRow key={coin.id} onClick={() => handleCoinClick(coin)}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={coin.image} alt={coin.name} style={{ width: '20px', marginRight: '5px' }} />
                        <Typography variant="body1">{coin.name.toUpperCase()}</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Right side - trade view chart */}
        <Box sx={{ flex: 2, height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
          {selectedCoin && (
            <Typography variant="h6" sx={{ mb: 2 }}>
              Trade View Chart: {selectedCoin.name}
            </Typography>
          )}
          <Box sx={{ height: 'calc(100% - 40px)', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            {selectedCoin && (
              <TradeViewChart
                key={selectedCoin.id} // Add a unique key based on the selected coin
                containerStyle={{
                  height: '100%',
                  width: '100%'
                }}
                pair={`${selectedCoin.symbol.toUpperCase()}USDT`}
              />
            )}
            {!selectedCoin && <Typography variant="body1">Please select a cryptocurrency to view the trade view chart.</Typography>}
          </Box>
        </Box>
      </Box>
    </ComponentSkeleton>
  );
};

export default Market;
