<template>
  <div class="details">
    <div class="detail-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title-underline heading-primary">Details</h1>
        </div>
      </transition>
    </div>

    <!-- card for detailed api with clickable link -->
    <div v-if="details != null ">
      <div class="container big-card lg-col-2 md-col-12 sm-col-12 xs-col-12">
        <b-card class="card">
          <b-card-text>
            This is detailed description of
            <em>API</em> that you have selected.
          </b-card-text>

          <p class="card-text font-weight-bold title">
            <b-card-text>{{details.API}}</b-card-text>
          </p>
          <p class="card-text font-weight-bold">
            <b-card-text>{{details.Description}}</b-card-text>
          </p>
          <a class="link-open" :href="details.Link">
            <p class="card-text">
              <b-card-text>{{details.Link}}</b-card-text>
            </p>
          </a>
        </b-card>
      </div>
    </div>

    <!-- releavant links as per above API shows here-->
    <h3 class="h3-heading">Visit other things below</h3>
    <div class="container-fluid m-auto">
      <div class="row m-auto">
        <div
          v-for="api in releavantApis"
          v-bind:key="api.API"
          class="card card-body card-home mx-2 mb-3 col-sm-3"
        >
          <div>
            <!-- click to see details -->
            <h5>
              <router-link
                class="card-title"
                :to="{ name: 'Detailpage', 
                       params: { id: api.API, category: api.Category }}"
              >{{api.API}}</router-link>
            </h5>
            <h6 class="card-content mb-2 text-muted">{{api.Description}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiFetcher } from "../shared/js/apiFetcher.js";

export default {
  name: "Detailpage",
  mixins: [apiFetcher],

  props: {
    id: String,
    category: String,
    https: Boolean
  },

  data() {
    return {
      show: false
    };
  },

  created: function() {
    // get details with title parameter as id from mixin 'apiFetcher' file
    this.getDetails(this.id, true);
  },
  watch: {
    // to see details after clicking on releavant card title in same page
    $route(to) {
      if (to && to.params && to.params.id) {
        this.id = to.params.id;
        this.getDetails(this.id, true);
      }
    }
  }
};
</script>

<style>
.detail-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/detail.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.details .card-home {
  max-width: 180px;
}
.row {
  justify-content: center;
}
</style>

