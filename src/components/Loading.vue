<template>
  <div class="loading" v-if="loading">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isLoading () {
      this.loading = this.isLoading
    }
  }
}
</script>
