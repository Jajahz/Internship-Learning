<script>
export default {
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id,
    }
  },
}
</script>

<template>
  <div>
    <h1>Job Detail Page</h1>
    <p>The job id is {{ id }}</p>
  </div>
</template>

<style></style>
