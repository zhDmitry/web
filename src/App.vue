<template>
  <v-app>
    <v-navigation-drawer light app permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Кабінети
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">

        <v-list-tile v-for="item in items" :key="item.title" @click="navigate(item.route)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import VueRouter from 'vue-router';

import student from './pages/student.vue'
import studentProfile from './pages/student-profile.vue'

import teacher from './pages/teacher.vue'
import admin from './pages/admin.vue'
import methodist from './pages/methodist.vue'
import login from './pages/login.vue'


const routes = [
  { path: '/admin', component: admin },
  { path: '/student', component: student },
  { path: '/student/:id', component: studentProfile },
  { path: '/teacher', component: teacher },
  { path: '/methodist', component: methodist },
  { path: '/login', component: login },
  { path: '/', component: login }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})
export default {
  name: 'app',
  router,
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Авторизація', icon: 'dashboard', route: '/login' },
        { title: 'Адмін', icon: 'dashboard', route: '/admin' },
        { title: 'Методист', icon: 'question_answer', route: '/methodist' },
        { title: 'Викладач', icon: 'dashboard', route: '/teacher' },
        { title: 'Студент', icon: 'question_answer', route: '/student' }
      ],
      right: null
    }
  },
  methods: {
    navigate(to) {
      router.push(to)
    },
    next() {
      this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
    }
  }
}
</script>
