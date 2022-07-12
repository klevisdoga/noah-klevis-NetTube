//api key
export const API_KEY = 'api_key=f720afb6cb7f950ef15b9eeb3c8db4ca';


//this file contains the url snippets for each of different genres
//will be used in PageGenres.js

const requests = {
    fetchTrending: `/trending/all/week?${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?${API_KEY}&language=en-US`,
    fetchAction: `/discover/movie?${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?${API_KEY}&with_genres=99`
}

export default requests;