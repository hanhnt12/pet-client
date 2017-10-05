import Services from './Services'
export default {

  data: {
    categories: []
  },

  methods: {
    // load categories on start up
    async loadCategory () {
      try {
        console.log('Bus load categories')
        // call service to get list categories
        const categories = await Services.getCategory()
        this.categories = categories.data
        console.log('Bus end load categories')
        return this.categories
        // setting list categories to global scope
      } catch (e) {
        console.log('Bus: error when loading categories')
        this.$emit('error', e)
      }
    }
  },
  created () {
    console.log('Bus: created')
  }
}
