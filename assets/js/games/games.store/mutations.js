export default {
  setGames(state, games) {
    state.games = games;
  },
  goToNext(state) {
    if (state.currentIndex === 0) {
      state.currentIndex = state.games.length - 1;
    } else {
      state.currentIndex = state.currentIndex - 1;
    }
  },
  goToPrevious(state) {
    if (state.currentIndex === state.games.length - 1) {
      state.currentIndex = 0;
    } else {
      state.currentIndex = state.currentIndex + 1;
    }
  }
};
