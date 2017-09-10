<template>
  <div class="app">
    <game-url></game-url>
    <section class="blue merida">
      <div ref="board" class="board"></div>
    </section>
    <previous-next></previous-next>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { Chessground } from 'chessground';
  import PreviousNext from './components/previous-next.vue';
  import GameUrl from './components/game-url.vue';

  export default {
    name: 'App',
    components: {
      PreviousNext,
      GameUrl
    },
    computed: {
      ...mapGetters('games', [
        'current'
      ])
    },
    methods: {
      ...mapActions('games', [
        'fetch'
      ])
    },
    created() {
      this.fetch();
    },
    watch: {
      current() {
        if (this.current.fen) {
          const ground = Chessground(this.$refs.board, {
            coordinates: false,
            resizable: true,
            fen: this.current.fen
          });
        }
      }
    }
  }
</script>

<style>
  @import url('../css/base.css');
  @import url('/node_modules/chessground-examples/assets/chessground.css');
  @import url('/node_modules/chessground-examples/assets/theme.css');

  .app {
    width: 512px;
    margin: 30px auto;
  }
  .board {
    width: 512px;
    height: 512px;
    margin: 15px auto;
  }
</style>
