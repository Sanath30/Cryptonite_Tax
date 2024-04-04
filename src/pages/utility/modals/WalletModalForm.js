import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function ModalForm({ open, handleClose, connectWallet }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Connect your wallet</DialogTitle>
      <DialogContent>
        {/* Your form content goes here */}
        {/* Example: <input type="text" placeholder="Enter your data" /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={() => { connectWallet(); handleClose(); }} variant="contained" color="primary">Connect</Button>
      </DialogActions>
    </Dialog>
  );
}
