import axios from 'axios';

const KEY = 'AIzaSyDLbuo0WsAxsJHccC9ieoMpQHXLxxxtldM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});