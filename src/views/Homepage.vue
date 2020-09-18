<template>
  <div class="container-fluid">
    <div class="home-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="heading-primary">Welcome to Vue-App</h1>
          <p class="heading-paragraph">Get Public APIS</p>
        </div>
      </transition>
    </div>

    <!-- sorting list buttons -->
    <div class="btnContainer">
      <!-- Custom Button component used -->
      <Button>
        <a v-on:click="doSort('API')" href="javascript:">
          Title
          <span v-if="sort.field=='API'">({{sort.desc?'desc':'asc'}})</span>
        </a>
      </Button>
      <Button>
        <a v-on:click="doSort('Description')" href="javascript:">
          Description
          <span v-if="sort.field=='Description'">({{sort.desc?'desc':'asc'}})</span>
        </a>
      </Button>
    </div>

    <!-- list of APIS -->
    <div id="page_list" class="row m-auto">
      <div
        class="card card-body card-home mx-2 mb-3 col-lg-3 col-md-3 col-sm-4"
        v-for="item in sortedData"
        v-bind:key="item.Link"
      >
        <!-- click for navigating to detail page -->
        <h5>
          <router-link
            class="card-title"
            :to="{ name: 'Detailpage', 
                       params: { id: item.API , category: item.Category}}"
          >{{item.API}}</router-link>
        </h5>
        <h6 class="mb-2 card-content">{{item.Description}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { apiFetcher } from "../shared/js/apiFetcher.js";
import Button from "../components/UI/Button.vue";

export default {
  name: "Homepage",
  props: ["id", "category"],
  components: {
    Button
  },
  mixins: [apiFetcher],

  data() {
    return {
      sort: {
        field: "",
        desc: true
      },
      show: false
    };
  },

  created: function() {
    // get data from public apis from mixin 'apiFetcher' file

    this.getApis();
  },
  computed: {
    // sorting by title or description

    sortedData() {
      if (!this.sort.field) {
        return this.values;
      }

      return this.values.concat().sort((a, b) => {
        if (this.sort.desc) {
          return a[this.sort.field] > b[this.sort.field] ? -1 : 1;
        } else {
          return a[this.sort.field] > b[this.sort.field] ? 1 : -1;
        }
      });
    }
  },
  methods: {
    // method to sort list of apis called on button click
    doSort(field) {
      if (field == this.sort.field) {
        this.sort.desc = !this.sort.desc;
      } else {
        this.sort.field = field;
        this.sort.desc = true;
      }
    }
  }
};
</script>

<style>
.home-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/home.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* style for sorting list buttons */
.btnContainer {
  margin: 20px auto;
  display: flex;
}
@media (max-width: 500px) {
  .btnContainer {
    display: flex;
    flex-direction: column;
    width: 220px;
    justify-content: center;
  }
}

#page_list .card-home {
  max-width: 250px;
}
</style>

