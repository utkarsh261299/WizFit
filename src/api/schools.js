// src/api/schools.js
import axios from 'axios';
const API_BASE_URL = 'https://api.devharlemwizardsinabox.com/campaign/campaign_school_list/';

export const fetchSchools = async (query = '') => {
  try {
    console.log(`${API_BASE_URL}?search=${query}`)
    const response = await axios.get(`${API_BASE_URL}?search=${query}`);

    console.log(response.data.school_list);
    return response.data.school_list || [];
  } catch (error) {
    throw new Error('Failed to fetch school data');
  }
};