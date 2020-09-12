<template>
  <div class="container-fluid">
    <div class="home-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1>Welcome to Vue-App</h1>
          <p>Get Public APIS</p>
        </div>
      </transition>
    </div>

    <!-- sorting list buttons -->
    <div class="btnContainer">
      <a v-on:click="doSort('API')" href="javascript:" class="sortLink">
        Title
        <span v-if="sort.field=='API'">({{sort.desc?'desc':'asc'}})</span>
      </a>
      <a v-on:click="doSort('Description')" href="javascript:" class="sortLink">
        Description
        <span v-if="sort.field=='Description'">({{sort.desc?'desc':'asc'}})</span>
      </a>
    </div>

    <!-- list of APIS -->
    <div id="page_list" class="row m-auto">
      <div
        class="card-body mx-2 mb-3 col-lg-3 col-md-3 col-sm-4 col-xs-12"
        v-for="item in sortedData"
        v-bind:key="item.Link"
      >
        <!-- click for navigating to detail page -->
        <h5>
          <router-link
            class="card-title"
            :to="{ name: 'Detailpage', 
                       params: { id: item.API , category: item.Category, https: item.HTTPS}}"
          >{{item.API}}</router-link>
        </h5>
        <h6 class="mb-2 card-content">{{item.Description}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Homepage",
  props: ["id", "category", "https"],

  data() {
    return {
      sort: {
        field: "",
        desc: true
      },
      values: [],
      show: false
    };
  },

  created: function() {
    // fetch data from public apis
    axios
      .get(process.env.VUE_APP_ENV_API + "/entries")
      .then(res => {
        this.show = true;
        this.values = res.data.entries.slice(0, 10);
      })
      .catch(function(error) {
        console.log(error);
      });
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
.container-fluid {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/home.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-img h1 {
  font-size: 80px;
  color: #fff;
  font-weight: 700;
}
.home-img p {
  color: #fff;
  font-size: 40px;
}

/* font size changes as screen size descreased */
@media (max-width: 690px) {
  .home-img h1 {
    font-size: 60px;
  }
}
@media (max-width: 499px) {
  .home-img h1 {
    font-size: 50px;
  }
  .home-img p {
    color: #fff;
    font-size: 40px;
  }
}
@media (max-width: 400px) {
  .home-img h1 {
    font-size: 35px;
  }
  .home-img p {
    color: #fff;
    font-size: 30px;
  }
}
@media (max-width: 280px) {
  .home-img h1 {
    font-size: 25px;
  }
  .home-img p {
    color: #fff;
    font-size: 25px;
  }
}

/* sorting list */
.btnContainer {
  margin: 30px auto;
}
@media (max-width: 500px) {
  .btnContainer {
    display: flex;
    flex-direction: column;
  }
}

.sortLink {
  cursor: pointer;
  padding: 10px 20px;
  margin: 30px;
  background: #af7b1a;
  color: #fff;
  font-size: 30px;
  border: 1px solid #af7b1a;
  transition: all 0.3s ease-in;
}

.sortLink:hover {
  font-size: 30px;
  padding: 10px 20px;
  margin: 30px;
  text-decoration: none;
  color: #af7b1a;
  background-color: rgb(226, 214, 214);
  border: 1px solid #af7b1a;
}
/* styles for cards  */
.card-body {
  color: rgb(22, 22, 22);
  font-size: 20px;
  border: 1px solid #a8a7a4;
  display: grid;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 26px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 26px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 26px -12px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
.card-title {
  font-size: 30px;
  font-weight: 900;
  color: rgb(116, 80, 3);
}
.card-title:hover {
  text-decoration: none;
  color: rgb(116, 80, 3);
  transform: scale(1.1);
}
.card-content {
  font-size: 20px;
  font-weight: 900;
  color: rgb(218, 153, 14);
}
</style>

