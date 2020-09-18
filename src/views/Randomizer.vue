<template>
  <div class="random">
    <div class="random-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title-underline heading-primary">Random API</h1>
        </div>
      </transition>
    </div>
    <!-- card for random API -->
    <div v-if="random != null ">
      <div class="container big-card">
        <b-card class="card">
          <b-card-text>
            This is detailed description of
            <em>Random API</em> .
          </b-card-text>
          <p class="card-text font-weight-bold title">
            <b-card-text>{{random.API}}</b-card-text>
          </p>
          <!-- link to visit website -->
          <a class="link-open" :href="random.Link">
            <p class="card-text font-weight-bold">
              <b-card-text>{{random.Link}}</b-card-text>
            </p>
          </a>
          <p class="card-text font-weight-bold">
            <b-card-text>Category : {{random.Category}}</b-card-text>
          </p>
        </b-card>
      </div>
    </div>
    <!-- button to see another random api -->

    <Button @click.native="getRandom" class="btn-random">Choose another API</Button>
  </div>
</template>

<script>
import Button from "../components/UI/Button.vue";
import { apiFetcher } from "../shared/js/apiFetcher";
export default {
  name: "Randomizer",
  mixins: [apiFetcher],
  components: {
    Button
  },
  data() {
    return {
      show: false
    };
  },
  created: function() {
    //get Random api from mixin 'apiFetcher' file
    this.getRandomApi();
  },
  methods: {
    //get data with ranodom api after button click

    getRandom: function() {
      this.getRandomApi();
    }
  }
};
</script>

<style>
.random-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/random.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-random:hover {
  cursor: pointer !important;
}
</style>

