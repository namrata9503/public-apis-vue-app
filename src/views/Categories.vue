<template>
  <div class="list--wrapper">
    <div class="category-img">
      <!-- fade down animate css for heading of page  -->
      <transition enter-active-class="animate__animated animate__fadeInDown">
        <div v-if="show">
          <h1 class="list--title-underline heading-primary">List of Categories</h1>
        </div>
      </transition>
    </div>
    <!-- for list of categories v-for , click on any category-->
    <div class="list row m-auto">
      <router-link
        class="list--item card-home mx-2 mb-3 col-sm-3"
        v-for="c in categories"
        :key="c" :to="{ name: 'Category', 
                       params: {  category: c}}"
      >
          <h2 class="list--link__header">
            <span class="card-category">
              {{c}}
            </span>
          </h2>
        
      </router-link>
    </div>
  </div>
</template>

    
<script>
import { apiFetcher } from '../shared/js/apiFetcher';

export default {
  name: "Categories",
  mixins:[apiFetcher],
  props: ["category"],
  data() {
    return {
      show: false,
      
    };
  },
  created: function() {
    // get all categories from public API 
    this.getCategories();
  }
};
</script>
    
<style>


.list--wrapper {
  position: relative;
  margin: 0 auto;
}

.category-img {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/categories.jpg");
     background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.list {
  counter-reset: list;
  list-style: none;
  padding: 0;
  text-align: initial;
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
  background-color: var(--color-grey-light-1);
  font-size: 30px;
  box-shadow: var(--shadow-light);
  color: var(--color-primary);
}
.list--item:hover{
  text-decoration: none;
   color: var(--color-primary-dark);
}


/* style for numbers before list items*/

.list--item::before {
  content: counter(list);
  position: absolute;
  top: 0.5em;
  left: 0.6em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  line-height: 2em;
  text-align: center;
  color: var( --color-primary);
  background-color: var(--color-grey-light-2);
  border: 1px solid  var( --color-primary);
}


.list--link__header {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0 0 6px;
  font-size: 25px;

}
.list--wrapper .card-home{
  max-width: 340px;
}

</style>
