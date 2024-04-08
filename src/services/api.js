import axios from "axios";

// const MY_ID = 584257;
const API_KEY = 'pFVIH-iYnuCPlvcagN9eKQjOLxM-kMNXpLbvGoIh5Ao';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
    orientation: "landscape",
    per_page: 15,
  };

  export const requestPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?client_id=${API_KEY}&query=${query}&page=${page}`); 
  return data;  
};
