<template>
  <div>
    <h3>
      Glad to have you here, <span class="userName">{{ userName }}</span>
    </h3>
    <p>
      Find a doctor and register for your appointment
    </p>
    <input type="text" v-model="search" placeholder="What type of specialist are you looking for?">
    <div class="specialist-list">
      <div v-for="category in filteredCategories" :key="category.id">
        <a class="btn btn-seconday">
          {{ category.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapGetters({user: 'getUser', categories: 'getCategories'}),
      userName() {
        return this.user.name
      },
      filteredCategories() {
        return this.categories.filter(category => category.name.toLowerCase().includes(this.search))
      }

    },
  }
</script>

<style scoped>
.userName {
  color: #2191fb
}
</style>
