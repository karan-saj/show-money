import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import BalanceSheetPage from './components/balanceSheet/balanceSheetPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/navbar';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balance-sheet" element={<Provider store={store}><BalanceSheetPage /></Provider>} />
      </Routes>
    </Router>
  );
};

export default App;