<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped persistent enable-resize-watcher app light>
      <div v-for="(items, index) in menu">
        <v-list dense class="mt-2">
          <v-list-tile v-for="item in items" :key="item.title" @click="navigate(item.route)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider v-if="index < (menu.length-1)"></v-divider>
      </div>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Особистий кабінет</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </div>
</template>

<script>
export default {
  name: 'user-layout',
  data() {
    return {
      drawer: true,
      menu: [
        [
          { title: 'Адмін', icon: 'dashboard', route: '/admin' },
          { title: 'Методист', icon: 'question_answer', route: '/methodist' },
          { title: 'Викладач', icon: 'dashboard', route: '/teacher' },
          { title: 'Студент', icon: 'question_answer', route: '/student' },
        ],
        [
          { title: 'Вийти', icon: 'exit_to_app', route: '/' }
        ]
      ]
    }
  },
  methods: {
    navigate(to) {
      this.$router.push(to)
    },
    next() {
      this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
    }
  }
}
</script>
