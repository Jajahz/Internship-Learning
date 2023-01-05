<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">info</a>
        <a href="#">more info</a>
      </template>
      <h1>Givaway</h1>
      <p>by Asamaporn</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">open modal (alt)</button>

  <teleport to=".modals" v-if="showmodalJ">
    <Modal theme="sale" @close="toggleModalJ">
      <template v-slot:links>
        <a href="#">click me</a>
      </template>
      <h1>Welcome to modal JJ</h1>
      <p>made by jj</p>
    </Modal>
  </teleport>
  <button @click="toggleModalJ">open modal JJ</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'sign up',
      text: 'or sign in',
      showModal: false,
      showmodalJ: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalJ(){
      this.showmodalJ = !this.showmodalJ
    }
  },
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
