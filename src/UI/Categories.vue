<template>
  <div class="list--wrapper">
    <div class="category-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title">List of Categories</h1>
        </div>
      </transition>
    </div>
    <!-- for list of categories v-for -->
    <div class="list row m-auto">
      <div
        class="list--item card-body mx-2 mb-3 col-xs-12 col-sm-3"
        v-for="c in categoryColumn"
        :key="c"
      >
        <a href="javascript:void(0)" class="list--link">
          <h2 class="list--link__header">
            <span>
              <!-- select category to view items of that category , opens category page -->
              <router-link
                class="card-category"
                :to="{ name: 'Category', 
                       params: {  category: c}}"
              >{{c}}</router-link>
            </span>
          </h2>
        </a>
      </div>
    </div>
  </div>
</template>

    
<script>
import axios from "axios";

export default {
  name: "Categories",
  props: ["category"],
  data() {
    return {
      categoryColumn: "",
      show: false
    };
  },
  created: function() {
    // fetch all categories from public API
    axios
      .get(process.env.VUE_APP_ENV_API + "/categories")
      .then(res => {
        this.show = true;
        this.categoryColumn = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
    
<style>
body {
  color: #fff;
}

.list--wrapper {
  position: relative;
  margin: 0 auto;
  /* max-width: 1140px; */
}

.category-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/categories.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.category-img h1 {
  font-size: 80px;
  color: #fff;
  font-weight: 700;
}

/* font size decreased as screen size gets decrease */
@media (max-width: 530px) {
  .category-img h1 {
    font-size: 60px;
  }
}
@media (max-width: 400px) {
  .category-img h1 {
    font-size: 48px;
  }
}
@media (max-width: 300px) {
  .category-img h1 {
    font-size: 38px;
  }
}

.list--title {
  padding: 65px 0 25px;
  padding-bottom: 5px;
  font-size: 40px;
  font-weight: 400;
  border-bottom: 2px solid;
}

.list {
  counter-reset: list;
  list-style: none;
  padding: 0;
  text-align: initial;
}
.card-category {
  color: #312b2b;
}
.list--item {
  counter-increment: list;
  text-transform: uppercase;
  position: relative;
  padding-left: 1.4em;
  font-size: 23px;
  margin: 20px 0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 50px;
  background-color: #fff;
  font-size: 30px;
  text-decoration: none;
  color: #af7b1a;
  box-shadow: 3px 3px 5px 6px #ccc;
}
.list--item a {
  transition: all 0.2s ease;
}

.list--item:hover a {
  color: #af7b1a;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-in;
}
/* style for numbers before list */

.list--item::before {
  content: counter(list);
  position: absolute;
  top: 0.5em;
  left: 0.6em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 2em;
  text-align: center;
  color: #141414;
  background-color: #fff;
  border: 1px solid #af7b1a;
}

.list--link {
  position: relative;
  display: block;
  width: 100%;
  text-decoration: none !important;
  color: inherit;
}
.list--link__header {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0 0 6px;
  font-size: inherit;
}
/* styles for all devices  font size*/
@media (min-width: 575px) {
  .list--item {
    font-size: 20px;
  }
}

@media (min-width: 767px) {
  .list--item {
    font-size: 22px;
  }
}

@media (min-width: 991px) {
  .list--item {
    font-size: 24px;
    margin-bottom: 20px;
  }
}

@media (min-width: 1199px) {
  .list--item {
    font-size: 26px;
  }
}
</style>
