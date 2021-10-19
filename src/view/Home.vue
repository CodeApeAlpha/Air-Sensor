<template>
  <div>
    <Nav/>
    <div class="container">
      <Map/>
      <section class="card">
        <div class="row">
          <section class="col-lg-6 p-1">
            <div class="row">
              <div class="col-12">
                <h3>Researcher</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                laborum, deserunt iste ad ullam ex optio voluptatibus
                consequuntur. Dolore, quas.
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3>Device</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                laborum, deserunt iste ad ullam ex optio voluptatibus
                consequuntur. Dolore, quas.
              </div>
            </div>
          </section>
          <section class="col-lg-6 p-1">
            <div class="row">
              <div class="col-12 ">
                <h3>Data</h3>
                  <ul class="list"  v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
                    <li class="list-group-item" v-for="employees in employeesData" :key="employees.id" >{{employees.date}}-{{employees.name}}</li>
                  </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="css">
.container {
  height: 1000px;
}
.list {
  max-height: 300px;
  overflow-y: scroll;
  scrollbar-color: #eeee #212529;
  scrollbar-width: thin;
  padding: 5px;
}
h3 {
  font-size: 50px;
}
.card {
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 30px;
  margin-top: 10px;
}
</style>
<script>
import Nav from "../components/NavBar.vue";
import Map from "../components/MiniMap.vue";
import firebase from "../firebaseConfig";
const db = firebase.firestore();
export default {
  data(){
    return{
      employeesData:[]
    }
  },
  components: {
    Nav,
    Map,
  },
  methods:{
    createEmployee(name, date) {
      console.log("Click");
      db.collection("employees")
        .add({ date: date, name: name })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    readEmployees() {
       db.collection("employees").onSnapshot((querySnapshot) => {
         
          querySnapshot.forEach((doc) => {
           this.employeesData.push({
              id: doc.id,
              name: doc.data().name,
              date: doc.data().date,
            });
          });
        })
    },
  },
  created(){
      this.readEmployees();
      this.$store.dispatch("Check");
   }
};
</script>