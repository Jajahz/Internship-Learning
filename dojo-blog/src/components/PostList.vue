<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log('component mounted')
    })
    onUnmounted(() => {
      console.log('component unmounted')
    })
    onUpdated(() => {
      console.log('component updated')
    })
  },
}
</script>

<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<style></style>
