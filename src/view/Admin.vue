<!-- Font Awesome JS -->

<template>
  <div>
    <Nav />
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar">
        <div class="sidebar-header bg-primary">
          <h5>DashBoard</h5>
          <strong> <i class="fas fa-toolbox"></i></strong>
        </div>
        <ul class="list-unstyled components">
          <li>
            <a  @click="DataTableComponentSwitch"  >
              <div class="row">
                <div class="col-12">
                    <i class="fas fa-satellite-dish fa-lg"></i>DATA 
                </div>
              </div>
            </a>
          </li>
          <li>
            <a @click="GraphComponentSwitch" >
              <div class="row">
                <div class="col-12">
                
                    <i class="fas fa-chart-area fa-lg"></i>GRAPH
                
                </div>
              </div>
            </a>
          </li>
          <li>
            <a @click="HistoryComponentSwitch">
              <div class="row">
                <div class="col-12">
                
                    <i class="fa fa-history fa-lg"></i>HISTORY
               
                </div>
              </div>
            </a>
          </li>
          <li>
            <a @click="LocationComponentSwitch">
              <div class="row">
                <div class="col-12">
                    <i class="fas fa-compass fa-lg"></i>Location
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
<!-- Page Content  -->
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light bar">
          <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </nav>
        <transition name="fade">
          <data-table class="data_table" v-if="DataTableComponent"></data-table>          
        </transition>
         <transition name="fade">
          <Chart v-if="GraphComponent"></Chart>          
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/NavBar.vue";
import $ from "jquery";
import DataTable from '../components/DataTable.vue';
import Chart from '../components/Chart.vue'
export default {
  components: {
    Nav,
    "data-table":DataTable,
    Chart
  },
  methods: {
    DataTableComponentSwitch(){
      this.$store.commit("DataTableComponentM",!this.DataTableComponent);
    },
    GraphComponentSwitch(){
      this.$store.commit("GraphComponentM",!this.GraphComponent);
    },
    HistoryComponentSwitch(){
      this.$store.commit("HistoryComponenttM",!this.HistoryComponent);
    },
    LocationComponentSwitch(){
      this.$store.commit("LocationComponentM",!this.LocationComponent);
    }

  },
  computed:{
    DataTableComponent(){
      return this.$store.getters.DataTableComponent;
    },
    GraphComponent(){
      return this.$store.getters.GraphComponent;
    },
    HistoryComponent(){
      return this.$store.getters.HistoryComponent;
    },
    LocationComponent(){
      return this.$store.getters.LocationComponent;
    },
  },
  created() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
      });
    });
  },
};
</script>

<style>

.row{
  padding:4px;
}
/* Transtion*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/*
        DEMO STYLE
*/
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

i,
span {
  display: inline-block;
}

/* ---------------------------------------------------
        SIDEBAR STYLE
    ----------------------------------------------------- */

.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 150px;
  max-width: 150px;
  background: var(--dark);
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  min-width: 90px;
  max-width: 90px;
  text-align: center;
}

#sidebar.active .sidebar-header h5,
#sidebar.active .CTAs {
  display: none;
}

#sidebar.active .sidebar-header strong {
  display: block;
}

#sidebar ul li a {
  text-align: left;
  padding: 1px;
}

#sidebar.active ul li a {
  /* padding: 20px 10px; */
  text-align: center;
  /* font-size: 0.85em; */
}

#sidebar.active ul li a i {
  margin-right: 0;
  display: block;
  font-size: 1.8em;
  margin-bottom: 5px;
}

#sidebar.active ul ul a {
  padding: 10px !important;
}

#sidebar.active .dropdown-toggle::after {
  top: auto;
  bottom: 10px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}

#sidebar .sidebar-header {
  padding: 20px;
  /* background: #6d7fcc; */
}

#sidebar .sidebar-header strong {
  display: none;
  font-size: 1.8em;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  /* color: var(--warning); */
  background: var(--gray);
}
#sidebar ul li.active > a:hover,
a[aria-expanded="true"] {
  color: var(--warning);
}
.btn-info {
  background: var(--secondary);
  color: var(--light);
}
#sidebar ul li a i {
  margin-right: 10px;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  /* background: var(--primary); */
  /* background:#7386d5; */
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: var(--gray);
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
        CONTENT STYLE
    ----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

/* ---------------------------------------------------
        MEDIAQUERIES
    ----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    margin-left: -80px !important;
  }
  .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
  }
  #sidebar.active {
    margin-left: 0 !important;
  }
  #sidebar .sidebar-header h3,
  #sidebar .CTAs {
    display: none;
  }
  #sidebar .sidebar-header strong {
    display: block;
  }
  #sidebar ul li a {
    padding: 20px 10px;
  }
  #sidebar ul li a span {
    font-size: 0.85em;
  }
  #sidebar ul li a i {
    margin-right: 0;
    display: block;
  }
  #sidebar ul ul a {
    padding: 10px !important;
  }
  #sidebar ul li a i {
    font-size: 1.3em;
  }
  #sidebar {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
