import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { config } from '../config/envConfig';
import { CustomError } from '../error/customError';

/**
 * Common HTTP Client option for REST calls
 * supports retry mechanisim
 */
interface HttpClientOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any;
  headers?: Record<string, string>;
  retries?: number;
}

export const httpClient = async (options: HttpClientOptions): Promise<any> => {
  const { url, method, data, headers, retries = Number(config.RETRY_COUNT) || 3 } = options;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const axiosConfig: AxiosRequestConfig = {
        url,
        method,
        data,
        headers,
      };

      const response: AxiosResponse = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(`Attempt ${attempt + 1} failed for ${url}:`, axiosError.toJSON());

      if (attempt === retries - 1) {
        throw new Error(`Request to ${url} failed after ${retries} retries: ${axiosError.message}`);
      }
    }
  }
};


export const httpGetRequest = async (apiPath: string, parameters: any) => {
  try {
      
    // API URL to get balance sheet report
    const baseUrl = config.ACCOUNT_MANAGER_BASE_URL + apiPath;
    const queryString = new URLSearchParams(parameters).toString();
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    // http client get request
    const responseData = await httpClient({
      url,
      method: 'GET',
      data: parameters,
      headers: {
        'Authorization': `Bearer ${config.ACCOUNT_MANAGER_API_TOKEN}`,
        'Content-Type': 'application/json',
      }
    });
    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle api failure
      throw new CustomError('API_CALL_FAILED', 500, error.message || 'An error occurred while fetching balance sheet data');
    }
    throw new CustomError('UNKNOWN_ERROR', 500, 'An unknown error occurred while fetching balance sheet data');
  }
}
