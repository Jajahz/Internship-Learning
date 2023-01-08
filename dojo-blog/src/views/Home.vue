<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import PostList from '@/components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    // let name = ref('mario')
    // let age = ref(30)

    // const handleClick = () => {
    //   name.value = 'Luigi'
    //   age.value = 25
    // }

    // const ninjaOne = ref({ name: 'Mario', age: 30 })
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40
    // }

    // const ninjaTwo = reactive({ name: 'Luigi', age: 35 })
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 50
    //   nameOne.value = 'luigi'
    //   // reactive can't change primitive value
    //   nameTwo = reactive('mario')
    // }

    // const nameOne = ref('mario')
    // const nameTwo = reactive('luigi')

    // const name = computed(()=>{
    //     return 'shaun'
    // })

    // const names = ref(['shuan', 'risa', 'bowser', 'mario', 'jajah', 'arm'])
    // const search = ref('')

    // const stopWatch = watch(search, () => {
    //   console.log('search changed')
    // })

    // const stopEff = watchEffect(() => {
    //   console.log('watchEff run', search.value)
    // })

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // const handleClick = () => {
    //     stopWatch()
    //     stopEff()
    // }

    const {posts,error,load} = getPosts()

    load()

    return {
      //   name,
      // names,
      // search,
      // matchingNames,
      // stopWatch,
      // stopEff,
      // handleClick,
      //   age,
      //   handleClick,
      //   ninjaOne,
      //   updateNinjaOne,
      //   ninjaTwo,
      //   updateNinjaTwo,
      //   nameOne,
      //   nameTwo,

      posts,
      error
    }
  },
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p>my name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">increase age</button>
    <br />
    <label>name: </label>
    <input type="text" v-model="name"> -->

    <!-- <h1>Refs</h1>
    <p>NinjaOne: {{ ninjaOne }}</p>
    <button @click="updateNinjaOne">click one</button>
    <h1>Reactive</h1>
    <p>NinjaTwo: {{ ninjaTwo }}</p>
    <button @click="updateNinjaTwo">click two</button>
    <p>1: {{ nameOne }} 2: {{ nameTwo }}</p> -->

    <!-- <p>{{ name }}</p> -->

    <!-- <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button> -->
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>

    <div v-if="posts.length"><PostList :posts="posts" /></div>
    <div v-else>Loading...</div>
  </div>
</template>

<style></style>
