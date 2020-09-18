<template>
  <div>
    <div class="category-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title-underline heading-primary">{{this.category}} Category</h1>
        </div>
      </transition>
    </div>

    <!-- list of selected category from all categories page -->
    <div class="container-fluid m-auto category">
      <div class="row m-auto">
        <div
          v-for="category in selectedCategory"
          v-bind:key="category.Link"
          class="card card-body card-home mx-2 mb-3 col-sm-3"
        >
          <div class>
            <!-- select any category from list to see details in detail page -->
            <h5>
              <router-link
                class="card-title"
                :to="{ name: 'Detailpage', 
                       params: { id: category.API, category: category.Category }}"
              >{{category.API}}</router-link>
            </h5>
            <h6 class="card-content mb-2 text-muted">{{category.Description}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiFetcher } from "../shared/js/apiFetcher";
export default {
  name: "Category",
  mixins: [apiFetcher],
  props: {
    category: String
  },

  data() {
    return {
      show: false
    };
  },
  created: function() {
    //get subcategories from main category
    this.getSelectedCategory(this.category);
  }
};
</script>

<style>
.category {
  padding: 60px;
}
.category .card-home {
  max-width: 250px;
}
</style>


