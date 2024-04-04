import React, { useState, useRef, useEffect } from 'react';
import { Box, FormControl, InputAdornment, OutlinedInput, Paper, List, ListItem, ListItemText } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const options = ['Dashboard', 'Utilities', 'Reports', 'Support'];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.clientWidth);
    }
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          ref={inputRef}
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight',
            placeholder: 'Search',
            value: searchTerm,
            onChange: handleInputChange,
            onFocus: handleInputFocus,
            onBlur: handleInputBlur,
          }}
        />
      </FormControl>
      {isFocused && filteredOptions.length > 0 && (
        <Paper elevation={3} sx={{ position: 'absolute', zIndex: 1, width: inputWidth, mt: 1 }}>
          <List>
            {filteredOptions.map((option, index) => (
              <ListItem button key={index}>
                <ListItemText primary={option} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default Search;
