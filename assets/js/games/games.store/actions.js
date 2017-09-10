import GamesService from '../games.service';

export default {
  fetch({ commit }) {
    GamesService.getGames().then((result) => {
      commit('setGames', result.data.games);
    });
  }
};
