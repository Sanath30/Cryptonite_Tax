import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Divider, Button } from '@mui/material';
import NFT from 'assets/images/pictures/NFT.jpg';
import TOKENS from 'assets/images/pictures/TOKENS.jpg';
import MARKET from 'assets/images/pictures/MARKET.jpg';
import REPORTS from 'assets/images/pictures/REPORTS.jpg';
import FINANCIALS from 'assets/images/pictures/FINANCIALS.jpg';
import SETTINGS from 'assets/images/pictures/SETTINGS.jpg';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../../components/chatbot/config.js';
import MessageParser from '../../components/chatbot/MessageParser.jsx';
import ActionProvider from '../../components/chatbot/ActionProvider.jsx';

const DashboardDefault = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  // Placeholder data for card information
  const cardData = [
    { title: 'NFT', description: 'Discover the revolutionary world of Non-Fungible Tokens (NFTs), where digital assets are tokenized, authenticated, and traded securely on the blockchain, unlocking endless possibilities for digital ownership and creativity.', imageUrl: NFT, links: ['View Supported NFT List', "Learn More About NFT's"] },
    { title: 'Tokens', description: 'Explore a diverse array of digital tokens, representing a spectrum of assets and utilities within the crypto ecosystem. From cryptocurrencies to utility tokens, delve into the vibrant token economy driving innovation and decentralization.', imageUrl: TOKENS, links: ['View Supported Tokens List', 'Learn More About Tokens'] },
    { title: 'Market', description: 'Dive into the dynamic and ever-evolving crypto market, where prices fluctuate, trends emerge, and opportunities abound. Stay informed with real-time data, charts, and analysis, empowering you to make informed investment decisions.', imageUrl: MARKET, links: ['View Cryptocurrency Market', 'View Market Data'] },
    { title: 'Reports', description: 'Gain valuable insights and analysis with comprehensive reports on crypto trends, market movements, and emerging technologies. Stay ahead of the curve with in-depth research and expert commentary, guiding your crypto investment strategies.', imageUrl: REPORTS, links: ['View Tax Reports', 'View Transaction Reports'] },
    { title: 'Financials', description: 'Manage your crypto finances with ease and precision. Track portfolios, monitor transactions, and analyze performance with powerful financial tools tailored to the crypto landscape. Stay in control of your digital assets and financial future.', imageUrl: FINANCIALS, links: ['View Income & Earning Financials', 'Crypto & NFT Investment Tracker'] },
    { title: 'Settings', description: 'Customize your crypto experience and manage account preferences with ease. From security settings to personalization options, take control of your digital identity and interactions within the crypto ecosystem.', imageUrl: SETTINGS, links: ['Customize Your Profile', 'Change Account Details'] },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {cardData.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
              <CardMedia
                component="img"
                height={200}
                image={card.imageUrl}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2, backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
                <List>
                  {card.links.map((link, index) => (
                    <ListItem key={index} button component="a" href="#" sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
                      <ListItemText primary={link} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Chatbot button */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        Chatbot
      </Button>
      {/* Chatbot component */}
      {chatbotOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            zIndex: 9998,
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardDefault;