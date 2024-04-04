import { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ComponentSkeleton from './ComponentSkeleton';
import Search from './Search';

function TokenBox() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const API_KEY = "CG-WqRtSzJYz8VGRY5ZGTEAUTyi";
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
    const options = {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": API_KEY,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (value) => {
    setSearch(value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 2 }}>Live Crypto Price Tracker</Typography>

      <Search onChange={handleChange} />

      <TableContainer sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>
              <TableCell>24h Volume</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCoins.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={coin.image} alt={coin.name} style={{ width: '20px', marginRight: '5px' }} />
                    {coin.name}
                  </Box>
                </TableCell>
                <TableCell>{coin.symbol}</TableCell>
                <TableCell>${coin.current_price.toLocaleString('en-US')}</TableCell>
                <TableCell>
                  <span style={{ color: coin.price_change_percentage_24h > 0 ? '#52c41a' : '#f5222d' }}>
                    {coin.price_change_percentage_24h}%
                  </span>
                </TableCell>
                <TableCell>${coin.total_volume.toLocaleString('en-US')}</TableCell>
                <TableCell>${coin.market_cap.toLocaleString('en-US')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {filteredCoins.length < 1 && (
        <Box>
          <Typography variant="h3">No Search Results Found!</Typography>
          <Typography variant="body1">Please check the spelling and ensure your cryptocurrency is in the list of top 250</Typography>
        </Box>
      )}

      <Box></Box>
    </Box>
  );
}

export default function Token() {
  return (
    <ComponentSkeleton>
      <TokenBox />
    </ComponentSkeleton>
  );
}
