<template>
  <div>
    <h4>Вхід в особистий кабінет</h4>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="поштова скринька"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="пароль"
        :rules="nameRules"
        type="password"
        min="6"
        required
      ></v-text-field>
      <v-select
        label="роль"
        v-model="select"
        :items="['Студент','Викладач','Методист','Адміністратор']"
        required
      ></v-select>
      <v-btn
        @click="submit"
      >увійти
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'login',
}
</script>
