export const parseUpdateDateStringToIsoString = (jsonDate: string) => {
    const match = jsonDate.match(/\/Date\((\d+)\)\//);
    
    if (match && match[1]) {
      const timestamp = Number(match[1]);
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options as Intl.DateTimeFormatOptions);
    }
  
    throw new Error("Invalid date format");
}