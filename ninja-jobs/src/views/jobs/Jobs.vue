<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: 'UX designer', details: 'lorem' },
        { id: 2, title: 'Web developer', details: 'lorem' },
        { id: 3, title: 'Vue developer', details: 'lorem' },
      ],
    }
  },
}
</script>

<template>
  <div class="job">
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }"
        ><h2>{{ job.title }}</h2></router-link
      >
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
