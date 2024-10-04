// apiConfig.js
export const API_BASE_URL = 'https://rupeemantra-backend.onrender.com/api/v1/';

export const ENDPOINTS = {
  FETCH_ALL_BANK_RATES: `${API_BASE_URL}bankrates/fetchAllBanksRates`,
  FETCH_ALL_LOAN_TYPES: `${API_BASE_URL}loantypes/fetchAllLoanTypes`,
  ADD_USER_DATA: `${API_BASE_URL}loan/addUserData`,
  // Add other endpoints as needed
};
