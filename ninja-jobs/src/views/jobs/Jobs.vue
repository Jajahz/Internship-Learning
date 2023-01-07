<script>
export default {
  data() {
    return {
      jobs: null,
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message))
  },
}
</script>

<template>
  <div class="job">
    <h1>Jobs</h1>
    <div v-if="jobs">
      <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetail', params: { id: job.id } }"
          ><h2>{{ job.title }}</h2></router-link
        >
      </div>
    </div>
    <div v-else>
      <p>Loading jobs...</p>
    </div>
  </div>
</template>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
