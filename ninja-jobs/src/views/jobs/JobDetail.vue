<script>
export default {
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message))
  },
}
</script>

<template>
  <div v-if="job">
    <h1>Job Detail Page</h1>
    <p>The job id is {{ id }}</p>
    <hr />
    <h2>{{ job.title }}</h2>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job...</p>
  </div>
</template>

<style></style>
