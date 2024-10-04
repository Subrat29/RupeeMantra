// apiService.js
import axios from 'axios';
import { ENDPOINTS } from './apiConfig';

const apiService = axios.create({
  baseURL: ENDPOINTS.API_BASE_URL,
  timeout: 10000, // Adjust timeout as needed
  headers: { 'Content-Type': 'application/json' },
});

export const fetchAllBankRates = () => {
  return apiService.get(ENDPOINTS.FETCH_ALL_BANK_RATES);
};

export const fetchAllLoanTypes = () => {
  return apiService.get(ENDPOINTS.FETCH_ALL_LOAN_TYPES);
};

export const addUserData = (data) => {
  return apiService.post(ENDPOINTS.ADD_USER_DATA, data);
};

// Export other API functions as needed
