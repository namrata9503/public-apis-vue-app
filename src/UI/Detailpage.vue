<template>
  <div class="details">
    <div class="detail-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title">Details</h1>
        </div>
      </transition>
    </div>

    <!-- card for detailed api with clickable link -->
    <div class="container detail-card lg-col-2 md-col-12 sm-col-12 xs-col-12">
      <b-card class="card-r card-bodyy">
        <b-card-text>
          This is detailed description of
          <em>API</em> that you have selected.
        </b-card-text>

        <p class="card-text font-weight-bold title">
          <b-card-text>{{val.API}}</b-card-text>
        </p>
        <p class="card-text font-weight-bold">
          <b-card-text>{{val.Description}}</b-card-text>
        </p>
        <a class="link-open" :href="val.Link">
          <p class="card-text">
            <b-card-text>{{val.Link}}</b-card-text>
          </p>
        </a>
      </b-card>
    </div>

    <!-- releavant links as per above API -->
    <h3 class="h3-link">Visit other things below</h3>
    <div class="container-fluid m-auto">
      <div class="row m-auto">
        <div
          v-for="api in otherApis"
          v-bind:key="api.API"
          class="card info mx-2 mb-3 col-xs-12 col-sm-3"
        >
          <div class="card-bodyy">
            <!-- click to see details -->
            <h5 class="card-title">
              <router-link
                class="card-title"
                :to="{ name: 'Detailpage', 
                       params: { id: api.API, category: api.Category, https: api.HTTPS }}"
              >{{api.API}}</router-link>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{api.Description}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detailpage",
  props: {
    id: String,
    category: String,
    https: Boolean
  },

  data() {
    return {
      val: [],
      otherApis: [],
      show: false
    };
  },

  created: function() {
    // fetch data with title parameter as id
    axios
      .get(process.env.VUE_APP_ENV_API + "/entries", {
        params: {
          title: this.id
        }
      })
      .then(res => {
        this.show = true;
        this.val = res.data.entries[0];
      })
      .catch(function(error) {
        console.log(error);
      });

    // fetch data with category and https parameters to fetch releavant APIS
    axios
      .get(process.env.VUE_APP_ENV_API + "/entries", {
        params: {
          category: this.category,
          https: true
        }
      })
      .then(res => {
        this.otherApis = res.data.entries.slice(0, 3);
        console.log("api category - ", this.otherApis[0].Category);
      })

      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    // to see details after clicking on releavant card title in same page
    $route(to) {
      axios
        .get(process.env.VUE_APP_ENV_API + "/entries", {
          params: {
            title: to.params.id
          }
        })
        .then(res => {
          this.val = res.data.entries[0];
        })
        .catch(function(error) {
          console.log(error);
        });
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

  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.detail-img h1 {
  font-size: 80px;
  color: #fff;
  font-weight: 700;
}

/* styles for heading for small screens */
@media (max-width: 499px) {
  .detail-img h1 {
    font-size: 50px;
  }
}
@media (max-width: 299px) {
  .detail-img h1 {
    font-size: 38px;
  }
}
.row {
  justify-content: center;
}
/* style for link in card */
.link-open {
  color: rgb(39, 29, 29);
  font-weight: 700;
  transition: all 0.3s ease-out;
}
@media (max-width: 400px) {
  .card-body .link-open {
    word-wrap: break-word;
    overflow: hidden;
  }
}
.h3-link{
  color:#af7b1a;
  font-size: 30px;
  margin: 20px auto;
}
.detail-card .card-body {
  border: 0;
}
.card-bodyy .title {
  font-size: 40px;
  text-transform: uppercase;
}
.card-bodyy:hover .link-open {
  transform: scale(1.1);
  text-decoration: none;
  color: #af7b1a;
}
</style>

