import axios from 'axios';


//here we create an instance of react to make our code a little bit cleaner
//we can call axios with just the extra url in PageGenres.js

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;