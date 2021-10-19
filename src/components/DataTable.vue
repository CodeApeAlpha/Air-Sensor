<template>
  <div class="order">
    <div class="row">
      <div class="col-12" v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
        <table class="table table-striped">
          <thead class="stick">
            <tr>
              <th scope="col">Count</th>
              <th scope="col">Gas-A</th>
              <th scope="col">Gas-B</th>
            </tr>
          </thead>
          <tbody class="scroll" >
            <tr v-for="employees in employeesData" :key="employees.id">
              <th scope="row">1</th>
              <td>{{ employees.date }}</td>
              <td>{{ employees.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseConfig";
const db = firebase.firestore();
export default {
  data() {
    return {
      employeesData: [],
      count: 0,
    };
  },
  methods: {
    readEmployees() {
      db.collection("employees").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.employeesData.push({
            id: doc.id,
            name: doc.data().name,
            date: doc.data().date,
          });
        });
      });
    },
  },
  created() {
    this.readEmployees();
  },
};
</script>

<style scoped>


.col-12{
  height: 300px;
  overflow-y: scroll;
  scrollbar-color: rgb(32, 32, 32) rgb(244, 245, 244);
  scrollbar-width: thin;
}
.stick {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: var(--secondary);
  color: aliceblue;
}
.order {
  margin:auto;
  width:100%;
}
</style>>
