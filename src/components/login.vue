<template>
  <v-container fluid fill-height style="background: #333">
    <v-layout flex align-center justify-center>
      <v-card class="grey lighten-4" style="width: 500px">
        <v-card-title primary-title class="pb-0">
          <span class="headline">Вхід в особистий кабінет</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              v-model="email"
              label="поштова скринька"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="пароль"
              type="password"
              min="6"
            ></v-text-field>
            <v-select
              v-model="role"
              label="роль"
              :items="roles"
              :rules="[v => !!v || 'Обов\'язкове поле']"
            ></v-select>
            <v-btn color="primary" class="ml-0" @click="signIn">
              увійти
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    valid: true,
    email: '',
    password: '',
    role: null,
    roles: [
      'Студент',
      'Викладач',
      'Методист',
      'Адміністратор'
    ]
  }),
  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        let roleMap = {
          'Студент': '/student',
          'Викладач': '/teacher',
          'Методист': '/methodist',
          'Адміністратор': '/admin'
        };
        this.$router.push(roleMap[this.role]);
      }
    }
  }
}
</script>
