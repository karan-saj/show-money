import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalanceSheet } from '../../redux/balanceSheetSlice';
import { AppDispatch, RootState } from '../../redux/store';
import BalanceSheetTable from './balanceSheetTable';
import { Container, Typography, CircularProgress } from '@mui/material';
import { BalanceSheetQueryParams } from '../../types/balanceSheetTypes';
import BalanceSheetFilters from './balanceSheetFilters';

const BalanceSheetPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.balanceSheet);
  
  const [tableData, setTableData] = useState<any[]>([]);
  const [filters, setFilters] = useState<BalanceSheetQueryParams>({
    date: undefined,
    periods: undefined,
    timeframe: undefined,
    trackingOptionID1: undefined,
    trackingOptionID2: undefined,
    standardLayout: undefined,
    paymentsOnly: undefined,
  });

  useEffect(() => {
    dispatch(fetchBalanceSheet(filters));
  }, [filters, dispatch]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleResetFilters = () => {
    setFilters({
      date: undefined,
      periods: undefined,
      timeframe: undefined,
      trackingOptionID1: undefined,
      trackingOptionID2: undefined,
      standardLayout: undefined,
      paymentsOnly: undefined,
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Balance Sheet
      </Typography>

      <BalanceSheetFilters 
        filters={filters}
        setFilters={setFilters}
        onApply={() => dispatch(fetchBalanceSheet(filters))}
        onReset={handleResetFilters}
      />

      {status === 'loading' && (
        <CircularProgress style={{ display: 'block', marginTop: '20px' }} />
      )}
      
      {status === 'failed' && (
        <Typography color="error" style={{ marginTop: '20px' }}>
          Failed to load balance sheet data.
        </Typography>
      )}
      
      {status === 'succeeded' && tableData.length > 0 && (
        <BalanceSheetTable data={tableData} />
      )}
    </Container>
  );
};

export default BalanceSheetPage;