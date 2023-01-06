<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Finger'
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflexes'
    } else {
      this.rank = 'Snail pace...'
    }
  },
}
</script>

<template>
  <div>
    <p>Reaction Time: {{ score }} ms</p>
    <p class="rank">Your Rank is: {{ rank }}</p>
  </div>
</template>

<style>
.rank {
  font-size: 1.4 em;
  color: violet;
  font-weight: bold;
}
</style>
