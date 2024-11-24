export const config = {
    ACCOUNT_MANAGER_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
    PORT: process.env.REACT_APP_PORT || 8090,
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET,
    ACCOUNT_MANAGER_API_TOKEN: process.env.REACT_APP_ACCOUNT_MANAGER_API_TOKEN,
    RETRY_COUNT: process.env.REACT_APP_RETRY_COUNT,
  };
  