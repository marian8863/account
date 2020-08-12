import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CareerBanner from "../views/CareerBanner.vue";
import Account from "../views/Account.vue";
import Financial from "../views/Financial.vue";
import Professional from "../views/Professional.vue";
import Salary from "../views/Salary.vue";
import VisionMisionComponent from "../views/VisionMisionComponent.vue";
import ReferenceComponent from "../views/ReferenceComponent.vue";
import CalComponent from "../views/CalComponent.vue";
import Contents from "../views/Contents.vue";
import Team from "../views/Team.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/CareerBanner",
    name: "CareerBanner",
    component:CareerBanner
  },
  {
    path: "/Account",
    name: "Account",
    component:Account
  },
  {
    path: "/Financial",
    name: "Financial",
    component:Financial
  },

  {
    path: "/Professional",
    name: "Professional",
    component:Professional
  },

  {
    path: "/Salary",
    name: "Salary",
    component:Salary
  },
  
  {
    path: "/VisionMisionComponent",
    name: "VisionMisionComponent",
    component:VisionMisionComponent
  },

  {
    path: "/ReferenceComponent",
    name: "ReferenceComponent",
    component:ReferenceComponent
  },
  {
    path: "/CalComponent",
    name: "CalComponent",
    component:CalComponent
  },

  {
    path: "/Contents",
    name: "Contents",
    component:Contents
  },

  {
    path: "/Team",
    name: "Team",
    component:Team
  },
  
  
  

  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
