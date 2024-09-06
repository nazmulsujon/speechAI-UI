import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: '#F5F7FA',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '320px',
  },
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
}));

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#6E6E6E',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8, 1, 0.8, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  '&::placeholder': {
    color: '#C4C4C4',
  },
}));

interface SearchBarProps {
  placeholder?: string;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search', onSearchChange }) => {
  return (
    <Search>
      <StyledInputBase placeholder={placeholder} inputProps={{ 'aria-label': 'search' }} onChange={onSearchChange} />
      <SearchIconWrapper>
        <SearchIcon style={{ color: '#6E6E6E' }} />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchBar;
