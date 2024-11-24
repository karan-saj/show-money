export interface Cell {
    Value: string;
    Attributes?: Array<{ Value: string; Id: string }>;
}
  
export interface Row {
    RowType: string;
    Title?: string;
    Cells?: Cell[];
    Rows?: Row[];
}
  
export interface ReportData {
    ReportID: string;
    ReportName: string;
    ReportType: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC: string;
    Fields: any[];
    Rows: Row[];
}
  
export interface GenericBalanceSheetReport {
    data: ReportData[];
}

export interface BalanceSheetQueryParams {
    date?: string;
    periods?: string;
    timeframe?: string;
    trackingOptionID1?: string;
    trackingOptionID2?: string;
    standardLayout?: string;
    paymentsOnly?: string;
}