import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { 
  GenericBalanceSheetReport,
  ReportData,
  Row,
  Cell,
} from '../../types/balanceSheetTypes';
import {
  parseUpdateDateStringToIsoString,
} from '../../utils/balanceSheetUtil';
import './balanceSheetTable.css';

const BalanceSheetTable: React.FC<GenericBalanceSheetReport> = ({ data }) => {

  const renderCells = (cells: Cell[]) => {
    return cells.map((cell, index) => (
      <TableCell key={index} className="table-cell">
        {cell.Value || ''}
      </TableCell>
    ));
  };

  const renderRows = (rows: Row[]) => {
    return rows.map((row, index) => {
      if (row.RowType === 'Header') {
        return (
          <TableRow key={index}>
            {renderCells(row.Cells || [])}
          </TableRow>
        );
      } else if (row.RowType === 'Section') {
        return (
          <React.Fragment key={index}>
            <TableRow>
              <TableCell colSpan={3} className="table-cell" style={{ fontWeight: 'bold' }}>
                {row.Title}
              </TableCell>
            </TableRow>
            {renderRows(row.Rows || [])}
          </React.Fragment>
        );
      } else if (row.RowType === 'Row' || row.RowType === 'SummaryRow') {
        return (
          <TableRow key={index}>
            {renderCells(row.Cells || [])}
          </TableRow>
        );
      }
      return null;
    });
  };

  return (
    <>
      {data.map((report: ReportData, reportIndex: number) => (
        <TableContainer 
          component={Paper} 
          key={reportIndex} 
          style={{ marginBottom: '20px', maxHeight: '50vh', overflowY: 'auto' }}
        >
          <Table stickyHeader>
            <TableHead className="table-header">
              <TableRow>
                <TableCell colSpan={3} className="table-title">
                  Report: {report.ReportName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} className="table-subtitle">
                  {report.ReportTitles.join(', ')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell">
                  Report Date:
                </TableCell>
                <TableCell colSpan={2} className="table-cell">
                  {report.ReportDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="table-cell">
                  Updated Date:
                </TableCell>
                <TableCell colSpan={2} className="table-cell">
                  {parseUpdateDateStringToIsoString(report.UpdatedDateUTC)}
                </TableCell>
              </TableRow>
              {report.Rows.length > 0 && (
                <TableRow>
                  {renderCells(report.Rows[0].Cells || [])}
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              {renderRows(report.Rows.slice(1))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
};

export default BalanceSheetTable;