<template>
  <div>
    <h3 class="toph3">
      Glad to have you here, <span class="userName">{{ userName }}</span>
    </h3>
    <p class="subtext text-secondary">
      Find a doctor and register for your appointment
    </p>
    <input type="text" class="spec-search" v-model="search" placeholder="I'm looking for...">

    <div class="specialist-list d-flex justify-content-center">
      <div class="d-flex justify-content-center flex-wrap items-container">
        <div v-for="category in filteredCategories" :key="category.id">
          <a class="btn btn-primary doctor-bubble text-light mt-1" @click="selectCategory(category.id)">
            {{ category.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="apointments-list">
      <AppointmentsList :selectedCategory="selectedCategory">

      </AppointmentsList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppointmentsList from "./AppointmentsList";
import Webrtc from "./Webrtc";
export default {
  components: { AppointmentsList, Webrtc },
  data() {
    return {
      search: "",
      selectedCategory: "",
    };
  },
  computed: {
    ...mapGetters({ user: "getUser", categories: "getCategories" }),
    userName() {
      return this.user.name;
    },
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.search)
      );
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped lang="scss">
.specialist-list {
  margin-top: 20px;
  width: 700;
  div {
    margin: 5px;
  }
}
.items-container {
  max-width: 700px;
}
.toph3 {
  margin-top: 100px;
}
.subtext {
  font-weight: 400;
}
.userName {
  color: #2191fb !important;
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
