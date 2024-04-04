import React, { useState } from 'react';
import ComponentSkeleton from './ComponentSkeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from './Search';
import ModalForm from './modals/WalletModalForm';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  marginBottom: theme.spacing(2)
}));

function FormRow({ wallets, handleCardClick }) {
  return (
    <Grid container spacing={3}>
      {wallets.map((wallet, index) => (
        <Grid item xs={3} key={index}>
          <Item>
            <CardActionArea onClick={() => handleCardClick(wallet)}>
              <CardContent>
                {wallet}
              </CardContent>
            </CardActionArea>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}

const WalletBox = () => {
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleChange = (value) => {
    setSearch(value);
  };

  const handleCardClick = (wallet) => {
    setSelectedWallet(wallet);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConnectWallet = async () => {
    try {
      // Check if ethereum object is available
      if (window.ethereum) {
        // Request accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
        console.log("Wallet Address:", address);
      } else {
        console.error("Metamask not detected. Please install Metamask.");
        // Optionally, you can prompt the user to install Metamask
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const cryptoWallets = ['Metamask', 'Phantom', 'Trust Wallet', 'Coinbase Wallet', 'Ledger Live', 'Trezor', 'MyEtherWallet', 'Exodus', 'Atomic Wallet', 'Electrum', 'Binance Chain Wallet', 'Math Wallet', 'Guarda Wallet', 'BitPay Wallet', 'Enjin Wallet', 'Edge', 'Coinomi', 'Jaxx', 'Infinito Wallet', 'Zengo', 'Coinomi', 'GreenAddress', 'Mycelium', 'Eidoo', 'CoolWallet', 'Blockchain.com Wallet'];

  const filteredWallets = search ? cryptoWallets.filter(wallet => wallet.toLowerCase().includes(search.toLowerCase())) : cryptoWallets;

  const rows = [];
  for (let i = 0; i < filteredWallets.length; i += 4) {
    rows.push(filteredWallets.slice(i, i + 4));
  }

  return (
    <ComponentSkeleton>
      <Search onChange={handleChange} />
      <Box mt={2}>
        {rows.map((wallets, index) => (
          <FormRow key={index} wallets={wallets} handleCardClick={handleCardClick} />
        ))}
      </Box>
      <ModalForm open={openModal} handleClose={handleCloseModal} connectWallet={handleConnectWallet} />
    </ComponentSkeleton>
  );
};

export default function Wallet() {
  return (
    <ComponentSkeleton>
      <WalletBox />
    </ComponentSkeleton>
  );
}
