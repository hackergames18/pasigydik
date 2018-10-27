<template>
  <div>
    <h3>
      Glad to have you here, <span class="userName">{{ userName }}</span>
    </h3>
    <p>
      Find a doctor and register for your appointment
    </p>
    <input type="text" class="spec-search" v-model="search" placeholder="I'm looking for...">
    <div class="specialist-list">
      <div v-for="category in filteredCategories" :key="category.id">
        <a class="btn btn-primary doctor-bubble text-light mt-1" @click="selectCategory(category.id)">
          {{ category.name }}
        </a>
      </div>
    </div>
    <div class="apointments-list">
      <AppointmentsList :selectedCategory="selectedCategory">

      </AppointmentsList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppointmentsList from './AppointmentsList'
  export default {
    components: { AppointmentsList },
    data() {
      return {
        search: '',
        selectedCategory: ''
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
    methods: {
      selectCategory(category) {
        this.selectedCategory = category

      }
    },
  }
</script>

<style scoped>
.userName {
  color: #2191fb;
}
.doctor-bubble {
  color: white;
}
.apointments-list {
  padding-top: 100px;
}
.spec-search {
  padding: 1em 2em;
}
</style>
