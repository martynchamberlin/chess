<template>
  <div class="previous-next">
    <a class="next" @click="goToNext">Next</a>

    <a class="prev" @click="goToPrevious">Previous</a>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'PreviousNext',
    methods: {
      ...mapMutations('games', [
        'goToPrevious',
        'goToNext'
      ])
    }
  };
</script>

<style>
  .previous-next {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
