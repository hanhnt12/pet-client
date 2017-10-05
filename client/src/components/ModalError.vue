<template>
  <modal v-if="showModal" @close="$emit('close')">
    <h3 slot="header">Đã có lỗi xảy ra</h3>
    <p slot="body">
      Chúng tôi rất đông đúc.
      <br />
      Vui lòng quay lại sau.
    </p>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'ModalError',
  components: {
    Modal
  },

  props: ['showModal'],

  data () {
    return {
    }
  },

  created () {
    this.$on('error', function () {
      console.log('have error')
      this.showModal = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
