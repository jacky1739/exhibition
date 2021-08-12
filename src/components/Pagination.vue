<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination d-flex justify-content-center">
    <li class="page-item" :class="{ 'disabled': !pagination.has_pre }">
      <a class="page-link" href="#" aria-label="Previous" style="color: black;" @click.prevent="$emit('get-product', pagination.current_page - 1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="page in pagination.total_pages" :key="page" >
        <a class="page-link" href="#" style="color: black;" @click.prevent="$emit('get-product', page)">{{ page }}</a>
    </li>
    <li class="page-item" :class="{ 'disabled': !pagination.has_next}">
      <a class="page-link" href="#" aria-label="Next" style="color: black;" @click.prevent="$emit('get-product', pagination.current_page + 1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pages'],
  data () {
    return {
      pagination: {}
    }
  },
  watch: {
    pages () {
      this.pagination = this.pages
    }
  }
}
</script>
