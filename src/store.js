import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";
import router from './router'
import  firebase from "firebase";
Vue.use(VueRouter);

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
       User: {
            userLog:false,
            data:null
       },
       DataTableComponent:true,
       GraphComponent:false,
       HistoryComponent:false,
       LocationComponent:false,
    //    CurrentPath: router.currentRoute.fullPath,
    },
    getters: {
        User:state=>{
            return state.User;
        },
        DataTableComponent:state=>{
            return state.DataTableComponent;
        },
        GraphComponent:state=>{
            return state.GraphComponent;
        },
        HistoryComponent:state=>{
            return state.HistoryComponent;
        },
        LocationComponent:state=>{
            return state.LocationComponent;
        },
        // CurrentPath:state=>{
        //     return  state.CurrentPath;
        // }

    },
    mutations: {
        updateLocalUser(state,user){
            state.User.userLog=user.userLog;
            state.User.data=user.object;
        },
        DataTableComponentM(state,bol){
            state.DataTableComponent=bol;
        },
        GraphComponentM(state,bol){
            state.GraphComponent=bol;
        },
        HistoryComponentM(state,bol){
            state.HistoryComponent=bol;
        },
        LocationComponentM(state,bol){
            state.LocationComponent=bol;
        }
    },
    actions:{
        Login({commit}){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log(user);
                    commit("updateLocalUser",{userLog:true,object:user});
                }
                else{
                    router.push({ path: '/auth'});
                }
            });
        },
        Logout({commit}){
            firebase.auth().signOut().then(()=>{
                commit("updateLocalUser",{userLog:false,object:null});
                router.push({ path: '/'});
            });
        },
        Admin(){
            router.push({ path: '/admin'});
        },
        Check({commit}){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    commit("updateLocalUser",{userLog:true,object:user});
                   
                }
                else{
                    commit("updateLocalUser",{userLog:false,object:null});
                }
            });
        }
    }
  });