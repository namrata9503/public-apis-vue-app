<template>
  <div class="footer">
    <div class="contain">
      <!-- column wise declaration -->

      <div class="col">
        <h1>Menu</h1>
        <ul>
          <li>Home Button</li>
          <li>Categories Button</li>
          <li>Randomizer Button</li>
        </ul>
      </div>
      <div class="col">
        <h1>Home Page</h1>
        <ul>
          <li>List of Public Apis</li>
          <li>Sorting(ASC/Desc)</li>
        </ul>
      </div>
      <div class="col">
        <h1>Details Page</h1>
        <ul>
          <li>Selected API Details</li>
          <li>Link to visit website</li>
          <li>3 Relevant Items</li>
        </ul>
      </div>
      <div class="col">
        <h1>Categories Page</h1>
        <ul>
          <li>List of Categories</li>
          <li>Select any Category</li>
        </ul>
      </div>
      <div class="col">
        <h1>Randomizer Page</h1>
        <ul>
          <li>Random API</li>
          <li>Random Button</li>
        </ul>
      </div>
      <div class="col-mid">
        <ul>
          <li>
            <a href="https://github.com/namrata9503/public-apis-vue-app">
              <i class="fab fa-github-square icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/namrata-chaudhari/">
              <i class="fab fa-linkedin icon"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
  <!-- END OF FOOTER -->
</template>


<script></script>


<style >
/* STYLES  TO FOOTER  */
.footer {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #070617;
  padding-top: 30px;
}
.footer .col {
  width: 210px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgba(255, 255, 255, 0.2);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #999999;

  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  font-size: 20px;
}

.footer .col ul li:hover {
  color: #ffffff;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
}
.clearfix {
  clear: both;
}

.col-mid {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col-mid ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
.footer .col-mid ul li a {
  color: #999999;

  font-family: inherit;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  font-size: 20px;
}
.footer .col-mid ul li .icon {
  text-shadow: 1px 1px 1px #ccc;
  font-size: 1.5em;
}

.footer .col-mid ul li a:hover {
  color: #ffffff;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
}
@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 950px) {
  .footer .col {
    width: 33%;
  }
  .footer .col h1 {
    font-size: 22px;
  }
  .footer .col ul li {
    font-size: 19px;
  }
}

/* for small screen */

@media only screen and (max-width: 500px) {
  .footer .col {
    width: 50%;
  }
  .footer .col h1 {
    font-size: 14px;
  }
  .footer .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 340px) {
  .footer .col {
    width: 100%;
  }
}
</style>