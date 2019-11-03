<template>
  <li
    class="game"
    @click="handleClick"
  >
    <img :src="game.image">

    <div class="content">
      <h2>{{ game.title }}, {{ game.year }}</h2>
      <h3>Published: {{ formatPublishDate }}</h3>

      <p>
        Started:
        <i :class="[game.started ? 'fas fa-check' : 'fas fa-times']" />
        Ended:
        <i :class="[game.ended ? 'fas fa-check' : 'fas fa-times']" />
      </p>

      <p>Percentage {{ game.percentage }}</p>

      <p>Estimated {{ game.estimated }}</p>
      <p>Score {{ game.score }} - Hype {{ game.hype }}</p>

      <div class="categories">
        <p
          v-for="categorie in game.categories"
          :key="categorie"
        >
          {{ categorie }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import formatDate from '@/utils/format-date';

export default {
  name: 'Game',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatPublishDate() {
      return formatDate(this.game.publish);
    },
  },
  methods: {
    handleClick() {
      this.$emit('game-clicked', this.game);
    },
    icon(isDone) {
      const icon = isDone ? 'check' : 'times';
      return `<i class="fas fa-${icon}"></i>`;
    },
  },
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.categories {
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #ffffff;
}

.categories p {
    padding: 0px 15px;
    margin: 2px;
    background-color: black;
}

h2 {
  margin: 0 0 5px;
}

h3 {
  margin-top: 0;
}

.content {
  padding-left: 40px;
}
</style>
