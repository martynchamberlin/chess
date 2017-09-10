import axios from 'axios';

export default {
  getGames(username = 'erik') {
    return axios.get(`https://api.chess.com/pub/player/${username}/games`);
  }
};
