<template>
  <div class="random">
    <div class="random-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title">Random API</h1>
        </div>
      </transition>
    </div>
    <!-- card for random API -->
    <div class="container random-card">
      <b-card class="card-bodyy card-r">
        <b-card-text>
          This is detailed description of
          <em>Random API</em> .
        </b-card-text>
        <p class="card-text font-weight-bold title">
          <b-card-text>{{values.API}}</b-card-text>
        </p>
        <!-- link to visit website -->
        <a class="link-open" :href="values.Link">
          <p class="card-text font-weight-bold">
            <b-card-text>{{values.Link}}</b-card-text>
          </p>
        </a>
        <p class="card-text font-weight-bold">
          <b-card-text>Category : {{values.Category}}</b-card-text>
        </p>
      </b-card>
    </div>
    <!-- button to see another random api -->
    <button
      class="button button--btn button--border-thin button--text-thick"
      @click="getRandom"
    >Choose another Random API</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Randomizer",

  data() {
    return {
      values: [],
      show: false
    };
  },
  created: function() {
    //fetch data with ranodom api after page load
    axios
      .get(process.env.VUE_APP_ENV_API + "/random")
      .then(res => {
        this.show = true;
        this.values = res.data.entries[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    //fetch data with ranodom api after button click

    getRandom: function() {
      axios
        .get(process.env.VUE_APP_ENV_API + "/random")
        .then(res => {
          this.values = res.data.entries[0];
        })
        .catch(function(error) {
          console.log(error);
        });
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
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.random-img h1 {
  font-size: 80px;
  color: #fff;
  font-weight: 700;
}
/* font size for small screen */
@media (max-width: 530px) {
  .random-img h1 {
    font-size: 60px;
  }
}
@media (max-width: 400px) {
  .random-img h1 {
    font-size: 48px;
  }
}

.container .card-r {
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  margin-top: 40px;
  border: 0;
  overflow: hidden;
}
.random-card .card-body {
  border: 0;
}
/* style for link  */
.link-open {
  color: rgb(39, 29, 29);
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease-out;
}

.card-bodyy:hover .link-open {
  transform: scale(1.1);
  text-decoration: none;
  color: #af7b1a;
}

/* for button style */

/* Common button styles */
.button {
  text-transform: uppercase;

  letter-spacing: 0.8px;
  font-size: 20px;

  min-width: 150px;
  max-width: 350px;
  display: block;
  margin: auto;
  padding: 10px 20px;
  border: none;
  background: none;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 11px 8px 16px -12px rgba(0, 0, 0, 0.75);
  color: #af7b1a;
  margin: 30px auto;
}
.button:focus {
  outline: none;
}
.button > span {
  vertical-align: middle;
}

/* Typography and Roundedness */

.button--text-thick {
  font-weight: 600;
}

/* Borders */
.button--border-thin {
  border: 1px solid;
}

/* btn */
.button--btn {
  -webkit-transition: border-color 0.4s, color 0.4s;
  transition: border-color 0.4s, color 0.4s;
}
.button--btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #af7b1a;
  z-index: -1;
  opacity: 0;
  -webkit-transform: scale3d(0.7, 1, 1);
  transform: scale3d(0.7, 1, 1);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
  transition: transform 0.4s, opacity 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--btn.button--round-s::before {
  border-radius: 2px;
}
.button--btn.button--inverted::before {
  background: #cbb879;
}
.button--btn,
.button--btn::before {
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--btn:hover {
  color: #fff;

  border-color: #af7b1a;
}
.button--btn.button--inverted:hover {
  color: #6e5709;
  border-color: #fff;
}
.button--btn:hover::before {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>

