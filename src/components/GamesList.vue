<template>
  <ul>
    <Game
      v-for="game in games"
      :key="game.id"
      :game="game"
      @game-clicked="handleGameClick"
    />
  </ul>
</template>

<script>
import Game from '@/components/Game.vue';

export default {
  name: 'GameList',
  components: {
    Game,
  },
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleGameClick() {
      // Do something
    },
    /*
    handleGameClick(game) {
      console.log(game);
    },
    */
  },
};
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
