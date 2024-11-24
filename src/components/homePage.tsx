import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Account Management System
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage your accounts efficiently and generate reports.
      </Typography>
      <Typography variant="body1">
        Our system allows you to track your transactions, manage your assets and liabilities and maintain an up-to-date balance sheet. 
        The balance sheet provides a snapshot of your financial position at any given time, helping you make informed decisions.
      </Typography>
      <Typography variant="body1">
        You can use the balance sheet to:
      </Typography>
      <ul>
        <li>Assess your company's financial health.</li>
        <li>Identify trends in your assets and liabilities over time.</li>
        <li>Make strategic decisions based on your financial data.</li>
        <li>Prepare for audits and tax filings with organized records.</li>
      </ul>
      <Button variant="contained" color="primary" component={Link} to="/balance-sheet" style={{ marginTop: '20px' }}>
        Go to Balance Sheet
      </Button>
    </Container>
  );
};

export default HomePage;