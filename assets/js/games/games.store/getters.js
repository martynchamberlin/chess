export default {
  current(state) {
    if (state.games) {
      return state.games[state.currentIndex];
    }
  }
}
