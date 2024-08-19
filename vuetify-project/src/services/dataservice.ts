// src/services/artsyApi.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.artsy.net/api';

const artsyApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Xapp-Token': "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiIzZDZkODQ5Ni1iZGY0LTQ5ZjgtYTVjMy0yY2RmZDYxNTc4ODAiLCJleHAiOjE3MjQ2MTUxNTMsImlhdCI6MTcyNDAxMDM1MywiYXVkIjoiM2Q2ZDg0OTYtYmRmNC00OWY4LWE1YzMtMmNkZmQ2MTU3ODgwIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY2YzI0ZjcxMTUwNDA2MDAwZWZjYjZkYyJ9.Z5o3w608bLobrJfTewLQ1RpgBf6zA-C9xG91GKeG1ro",
  },
});

export default {
  searchArtists(query: string) {
    return artsyApi.get(`/search?q=${query}&type=artist`);
  },

  getArtist(id: string) {/* 
    return artsyApi.get(`/artists/${id}`); */
  console.log(id)
    return artsyApi.get(`${id}`); 
  },

  getArtworksByArtist(id: string) {
    return artsyApi.get(`/artworks/${id}`);
  },
};