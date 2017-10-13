<template>
  <div>
    <v-card>
      <v-card-title>
        <div>
          <p>Вітаємо, {{ this.$store.state.fullName }}</p>
          <span class="h5 m-0">Дисципліни</span>
        </div>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Пошук" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
        <template slot="items" scope="props">
          <td class="text-xs-right">{{ props.item.university }}</td>
          <td class="text-xs-right">{{ props.item.faculty }}</td>
          <td class="text-xs-right">{{ props.item.department }}</td>
          <td class="text-xs-right">{{ props.item.teacher }}</td>
          <td class="text-xs-right">{{ props.item.subject }}</td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
      <v-card-actions v-if="canCreate">
        <v-dialog v-model="dialog" persistent width="500px">
          <v-btn color="primary" dark slot="activator">Створити дисципліну</v-btn>
          <v-card>
            <v-card-text>
              <v-text-field label="Університет"></v-text-field>
              <v-text-field label="Факультет"></v-text-field>
              <v-text-field label="Кафедра"></v-text-field>
              <v-text-field label="Викладач"></v-text-field>
              <v-text-field label="Назва"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" flat @click.native="dialog=false">Скасувати</v-btn>
              <v-btn color="blue darken-1" flat @click.native="dialog=false">Зберегти</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" persistent width="500px">
          <v-btn color="primary" dark slot="activator">Додати студента до дисципліни та групи</v-btn>
          <v-card>
            <v-card-text>
              <v-text-field label="Номер заліковки студента"></v-text-field>
              <v-text-field label="Номер дисципліни"></v-text-field>
              <v-text-field label="Номер групи"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" flat @click.native="dialog2=false">Скасувати</v-btn>
              <v-btn color="blue darken-1" flat @click.native="dialog2=false">Зберегти</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        { text: 'Університет', value: 'university' },
        { text: 'Факультет', value: 'faculty' },
        { text: 'Кафедра', value: 'department' },
        { text: 'Викладач', value: 'teacher' },
        { text: 'Дисципліна', value: 'subject' },
      ],
      items: require('../../mock/subject.json'),
      dialog: false,
      dialog2: false,
      canCreate: ['admin', 'methodist', 'teacher'].includes(this.$store.state.role)
    }
  }
}
</script>
