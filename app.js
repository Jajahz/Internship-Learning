const app = Vue.createApp({
  data() {
    return {
      url: 'http://facebook.com',
      showBooks: true,
      x: 0,
      y: 0,
      books: [
        {
          id: 1,
          title: 'Book 1',
          author: 'Author 1',
          img: 'assets/1.png',
          isFav: true,
        },
        {
          id: 2,
          title: 'Book 2',
          author: 'Author 2',
          img: 'assets/2.png',
          isFav: false,
        },
        {
          id: 3,
          title: 'Book 3',
          author: 'Author 3',
          img: 'assets/3.png',
          isFav: true,
        },
      ],
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e) {
      console.log(e, e.type)
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    changeFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
})

app.mount('#app')
