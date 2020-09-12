<template>
  <div class="cat">
    <div class="category-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title">{{this.category}} Category</h1>
        </div>
      </transition>
    </div>

    <!-- list of selected category from all categories page -->
    <div class="container-fluid m-auto category">
      <div class="row m-auto">
        <div
          v-for="category in catn"
          v-bind:key="category.Link"
          class="card info mx-2 mb-3 col-xs-12 col-sm-3"
        >
          <div class="card-bodyy">
            <!-- select any category from list to see details in detail page -->
            <h5 class="card-title">
              <router-link
                class="card-title"
                :to="{ name: 'Detailpage', 
                       params: { id: category.API, category: category.Category, https: category.HTTPS }}"
              >{{category.API}}</router-link>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{category.Description}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Category",
  props: {
    category: String
  },

  data() {
    return {
      catn: [],
      show: false
    };
  },
  created: function() {
    // fetch data with parameter as category name
    axios
      .get(process.env.VUE_APP_ENV_API + "/entries", {
        params: {
          category: this.category
        }
      })
      .then(res => {
        this.show = true;
        this.catn = res.data.entries;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.category {
  padding: 80px;
}
</style>


