// src/services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://lively-ocean-0b590a20f.5.azurestaticapps.net', // Replace with your API URL
});

export default instance;
