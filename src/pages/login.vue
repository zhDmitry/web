<template>
  <div>
    <h4>Вхід в особистий кабінет</h4>
    <v-form ref="form">
      <v-text-field label="поштова скринька"></v-text-field>
      <v-text-field label="пароль" type="password" min="6"></v-text-field>
      <v-select label="роль" :items="['Студент','Викладач','Методист','Адміністратор']"></v-select>
      <v-btn>
        увійти
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({

  })
}
</script>
