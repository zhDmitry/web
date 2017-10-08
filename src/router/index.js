import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";

import student from "@/pages/student.vue";
import studentProfile from "@/pages/student-profile.vue";

import teacher from "@/pages/teacher.vue";
import admin from "@/pages/admin.vue";
import methodist from "@/pages/methodist.vue";
import login from "@/pages/login.vue";

const routes = [
  { path: "/admin", component: admin },
  { path: "/student", component: student },
  { path: "/student/:id", component: studentProfile },
  { path: "/teacher", component: teacher },
  { path: "/methodist", component: methodist },
  { path: "/login", component: login },
  { path: "/", component: login }
];

Vue.use(Router);

export default new Router({
  routes: routes
});
