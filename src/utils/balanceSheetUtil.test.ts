import { parseUpdateDateStringToIsoString } from './balanceSheetUtil';

describe('parseUpdateDateStringToIsoString', () => {
  
  it('should parse JSON date string', () => {
    const jsonDate = '/Date(1638316800000)/'; // Represents December 1, 2021
    const expectedOutput = '1 December 2021';
    
    expect(parseUpdateDateStringToIsoString(jsonDate)).toBe(expectedOutput);
  });

  it('should throw error for a invalid date format', () => {
    const invalidJsonDate = '/Iasdada)/';
    
    expect(() => parseUpdateDateStringToIsoString(invalidJsonDate)).toThrow("Invalid date format");
  });
});