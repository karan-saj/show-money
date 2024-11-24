import React from 'react';
import { TextField, Button, Box, FormControlLabel, Checkbox } from '@mui/material';
import { BalanceSheetQueryParams } from '../../types/balanceSheetTypes';

interface BalanceSheetFiltersProps {
  filters: BalanceSheetQueryParams;
  setFilters: React.Dispatch<React.SetStateAction<BalanceSheetQueryParams>>;
  onApply: () => void;
  onReset: () => void;
}

const BalanceSheetFilters: React.FC<BalanceSheetFiltersProps> = ({ filters, setFilters, onApply, onReset }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked ? 'true' : 'false',
    }));
  };

  return (
    <Box paddingBottom="20px" display="flex" flexDirection="column" gap="10px">
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <TextField
        type="date" value={filters.date || ''}
        onChange={(e) => setFilters({ ...filters, date: e.target.value || undefined })}
        fullWidth style={{ minWidth: '120px' }}
      />
      <TextField
        label="Periods (1-11)" type="number"
        value={filters.periods || ''}
        onChange={(e) => setFilters({ ...filters, periods: e.target.value || undefined })}
        fullWidth style={{ minWidth: '120px' }}
      />
      <TextField
        label="Timeframe" select
        value={filters.timeframe || ''}
        onChange={(e) => setFilters({ ...filters, timeframe: e.target.value || undefined })}
        fullWidth style={{ minWidth: '120px' }}
      >
        <option value="MONTH">Month</option>
        <option value="QUARTER">Quarter</option>
        <option value="YEAR">Year</option>
      </TextField>
    </Box>
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <TextField
        label="Tracking Option ID 1" value={filters.trackingOptionID1 || ''}
        onChange={(e) => setFilters({ ...filters, trackingOptionID1: e.target.value || undefined })}
        fullWidth style={{ minWidth: '120px' }}
      />
      <TextField
        label="Tracking Option ID 2"
        value={filters.trackingOptionID2 || ''}
        onChange={(e) => setFilters({ ...filters, trackingOptionID2: e.target.value || undefined })}
        fullWidth
        style={{ minWidth: '120px' }}
      />
      <FormControlLabel
        control={
          <Checkbox name="standardLayout" checked={filters.standardLayout === 'true'} onChange={handleCheckboxChange} />
        }
        label="Standard Layout"
      />
      <FormControlLabel
        control={
          <Checkbox name="paymentsOnly" checked={filters.paymentsOnly === 'true'} onChange={handleCheckboxChange} />
        }
        label="Payments Only"
      />
    </Box>
    <Box>
    <Button variant="contained" color="primary" onClick={onApply} style={{ marginRight: '10px' }}>
        Apply Filters
    </Button>

    <Button variant="outlined" color="secondary" onClick={onReset}>
        Reset Filters
    </Button>
    </Box>
    </Box>
    
  );
};

export default BalanceSheetFilters;