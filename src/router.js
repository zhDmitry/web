import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/index';

import Login from '@/components/login.vue';
import UserLayout from '@/components/user-layout.vue';

import MethodistList from '@/pages/methodist-list.vue';
import StudentGrades from '@/pages/student-grades.vue';
import StudentList from '@/pages/student-list.vue';
import StudentSubjects from '@/pages/student-subjects.vue';
import StudentPerformance from '@/pages/student-performance.vue';
import SubjectList from '@/pages/subject-list.vue';
import TeacherList from '@/pages/teacher-list.vue';

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: (to, from, next) => {
      store.state.role ? store.dispatch('redirectToHome') : next();
    }
  },
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '/methodists', component: MethodistList },
      { path: '/students', component: StudentList },
      { path: '/students-performance', component: StudentPerformance },
      { path: '/students/:id/grades', component: StudentGrades },
      { path: '/students/:id/subjects', component: StudentSubjects },
      { path: '/teachers', component: TeacherList },
      { path: '/subjects', component: SubjectList }
    ]
  }
];

export default new Router({
  routes: routes
});
