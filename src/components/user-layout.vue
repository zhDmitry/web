<template>
  <v-layout wrap v-flex style="flex-direction: column">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      light
      absolute>
      <div v-for="(items, index) in menu">
        <v-list dense class="mt-2">
          <v-list-tile v-for="item in items" :key="item.title" @click="item.click()">
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
    <v-toolbar app fixed clipped-left dark class="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-layout>
</template>

<script>
export default {
  name: "user-layout",
  data() {
    let { role, userId } = this.$store.state;

    let methodistListItem = {
      title: "Методисти",
      icon: "group",
      click: () => this.navigate("/methodists")
    };
    let teacherListItem = {
      title: "Викладачі",
      icon: "group",
      click: () => this.navigate("/teachers")
    };
    let studentListItem = {
      title: "Студенти",
      icon: "group",
      click: () => this.navigate("/students")
    };
    let scheduleListItem = {
      title: "Групи та розклад",
      icon: "event",
      click: () => this.navigate("/students/42/subjects") // TODO change this
    };
    let performanceListItem = {
      title: "Успішність студентів",
      icon: "group",
      click: () => this.navigate("/students-performance")
    };
    let subjectsListItem = {
      title: "Дисципліни",
      icon: "group",
      click: () => this.navigate("/subjects")
    };

    let roles = {
      admin: {
        title: "Особистий кабінет адміністратора",
        menu: [
          methodistListItem,
          teacherListItem,
          studentListItem,
          scheduleListItem,
          subjectsListItem,
          performanceListItem
        ]
      },
      student: {
        title: "Особистий кабінет студента",
        menu: [
          {
            title: "Мій розклад",
            icon: "event",
            click: () => this.navigate("/students/" + userId + "/subjects")
          },
          {
            title: "Щоденник",
            icon: "grade",
            click: () => this.navigate("/students/" + userId + "/grades")
          }
        ]
      },
      methodist: {
        title: "Особистий кабінет методиста",
        menu: [
          teacherListItem,
          studentListItem,
          scheduleListItem,
          subjectsListItem,
          performanceListItem
        ]
      },
      teacher: {
        title: "Особистий кабінет викладача",
        menu: [
          studentListItem,
          scheduleListItem,
          subjectsListItem,
          performanceListItem
        ]
      }
    };

    return {
      drawer: true,
      menu: [
        roles[role].menu,
        [
          {
            title: "Вийти",
            icon: "exit_to_app",
            click: () => {
              this.$store.commit("signOut");
              this.navigate("/login");
            }
          }
        ]
      ],
      title: roles[role].title
    };
  },
  methods: {
    navigate(to) {
      this.$router.push(to);
    }
  }
};
</script>
