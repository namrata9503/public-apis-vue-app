
<template>
<!-- Button component to reuse in other components -->

  <button class="button button--btn button--border-thin button--text-thick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>


<style>


/* for button style */

.button {
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-size: 20px;
  min-width: 150px;
  max-width: 350px;
  display: block;
  padding: 10px 20px;
  border: none;
  background: none;
  vertical-align: middle;
  position: relative;
 -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: var(--shadow-light);
  color: var(--color-primary);
  margin: 20px auto;
}
.button a {
  color: var(--color-primary);
}
.button:hover a {
  color: var( --color-grey-light-4);
  text-decoration: none;
}
.button:focus {
  outline: none;
}

.button--text-thick {
  font-weight: 600;
}

/* Borders */
.button--border-thin {
  border: 1px solid;
}

/* btn */

.button--btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  z-index: -1;
  opacity: 0;
  -webkit-transform: scale3d(0.7, 1, 1);
  transform: scale3d(0.7, 1, 1);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
  transition: transform 0.4s, opacity 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--btn,
.button--btn::before {
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--btn:hover {
  color: var( --color-grey-light-4);
  cursor: default;
  border-color: var(--color-primary);
}

.button--btn:hover::before {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
