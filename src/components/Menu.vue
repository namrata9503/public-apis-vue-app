<template>
  <div>
    <!-- fixed navbar -->
    <nav :class="{change_color: scrollPosition > 70}" class="navbar navbar-expand-sm fixed-top">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/my-logo.png" alt="logo">
      </router-link>

      <!-- toggle button for navigation -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navigation links -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav navlist" id="mobList">
          <li class="nav-item active">
            <router-link
              class="nav-link"
              to="/"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
            >
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/categories"
              class="nav-link"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
            >Categories</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/random"
              class="nav-link"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
            >Random</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Menu",

  data() {
    return {
      scrollPosition: null
    };
  },
  // scrolling position
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style>
nav {
  font-size: 20px;
}

/* toggler icon color */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
@media (min-width: 234px) {
  .navbar-collapse {
    background-color: rgba(131, 91, 5, 0.925);
    color: #fff;
  }
  nav.navbar-expand-sm {
    padding: 0;
    margin: 0;
  }
}
@media (min-width: 576px) {
  .navbar-collapse {
    background-color: unset;
  }
}

.navbar .navbar-expand-sm {
  background: none !important;
  border: none;
}
/* after scrolling navigation color changes */
.change_color {
  background-color: rgba(131, 91, 5, 0.925);
}

img {
  width: 40px;
  height: 40px;
}
a {
  color: #fff;
}
.nav-link {
  transition: all 0.2s ease;
}
.nav-link:hover {
  color: #fff !important;
  font-weight: 900;
  transform: scale(1.1);
}
</style>

