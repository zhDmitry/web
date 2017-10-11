import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/login.vue';
import UserLayout from '@/components/user-layout.vue';

import Admin from '@/pages/admin.vue';
import Methodist from '@/pages/methodist.vue';
import Student from '@/pages/student.vue';
import StudentProfile from '@/pages/student-profile.vue';
import Teacher from '@/pages/teacher.vue';

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '/admin', component: Admin },
      { path: '/student', component: Student },
      { path: '/student/:id', component: StudentProfile },
      { path: '/teacher', component: Teacher },
      { path: '/methodist', component: Methodist }
    ]
  }
];

export default new Router({
  routes: routes
});
