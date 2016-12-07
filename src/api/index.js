import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '73ec63af07186187c4ecc3e3815b45ab';

export function searchMovies(query) {
    const params = {
        query,
        api_key: API_KEY,
    };

    return axios.get(`${API_PREFIX}/search/movie`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMovie(id) {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/${id}`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMoviesByType(type) {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/${type}`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMoviesExtra(id, type) {
    const params = {
        api_key: API_KEY
    };
    
    return axios.get(`${API_PREFIX}/movie/${id}/${type}`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export default {
    searchMovies,
    fetchMovie,
    fetchMoviesByType,
    fetchMoviesExtra
};
