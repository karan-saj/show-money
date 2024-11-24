import { render, screen } from '@testing-library/react';
import BalanceSheetTable from './balanceSheetTable';
import { GenericBalanceSheetReport } from '../../types/balanceSheetTypes';

const mockData: GenericBalanceSheetReport = {
  data: [
    {
        ReportName: 'Annual Financial Report',
        ReportTitles: ['Title 1', 'Title 2'],
        ReportDate: '2024-01-01',
        UpdatedDateUTC: '/Date(1732424258476)/',
        Rows: [
            {
                RowType: 'Header',
                Cells: [{ Value: 'Column 1' }, { Value: 'Column 2' }, { Value: 'Column 3' }],
            },
            {
                RowType: 'Row',
                Cells: [{ Value: 'Data 1' }, { Value: 'Data 2' }, { Value: 'Data 3' }],
            },
            {
                RowType: 'Section',
                Title: 'Section Title',
                Rows: [
                    {
                        RowType: 'Row',
                        Cells: [{ Value: 'Sub Data 1' }, { Value: 'Sub Data 2' }, { Value: 'Sub Data 3' }],
                    },
                ],
            },
        ],
        ReportID: '',
        ReportType: '',
        Fields: []
    },
  ],
};

describe('BalanceSheetTable', () => {
  it('renders balance sheet table', () => {
    render(<BalanceSheetTable data={mockData.data}/>);
    
    // Check report name is rendered
    expect(screen.getByText(/Annual Financial Report/i)).toBeInTheDocument();
    
    // Check report titles are rendered
    expect(screen.getByText(/Title 1, Title 2/i)).toBeInTheDocument();
    
    // Check report date is rendered
    expect(screen.getByText(/Report Date:/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();

    // Check updated date is rendered
    expect(screen.getByText(/Updated Date:/i)).toBeInTheDocument();

    // Chec header cells are rendered
    expect(screen.getByText(/Column 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Column 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Column 3/i)).toBeInTheDocument();

    // Check section title and sub data are rendered
    expect(screen.getByText(/Section Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Sub Data 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Sub Data 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Sub Data 3/i)).toBeInTheDocument();
  });
});