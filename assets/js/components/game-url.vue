<template>
  <a :href="current.url" class="game-url" target="_blank" v-if="current">{{ current.url }}</a>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'GameUrl',
    computed: {
      ...mapGetters('games', [
        'current'
      ])
    }
  };
</script>

<style>
  .game-url {
    text-align: center;
    display: block;
    margin: 0 0 20px;
    font-size: .75rem;
    color: #999;
  }
</style>
