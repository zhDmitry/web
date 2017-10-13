<template>
  <div>
    <v-card>
      <v-card-title>
        <div>
          <p>Вітаємо, {{ this.$store.state.fullName }}</p>
          <span class="h5 m-0">Щоденник</span>
        </div>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
        <template slot="items" scope="props">
          <td>{{ props.item.subject }}</td>
          <td class="text-xs-right">{{ props.item.teacher }}</td>
          <td class="text-xs-right">{{ props.item.date }}</td>
          <td class="text-xs-right">{{ props.item.mark }}</td>
          <td class="text-xs-right">{{ props.item.comment }}</td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Дисципліна',
          align: 'left',
          sortable: true,
          value: 'subject'
        },
        { text: 'Викладач', sortable: true, value: 'teacher' },
        { text: 'Дата', sortable: true, value: 'date' },
        { text: 'Оцінка', sortable: true, value: 'mark' },
        { text: 'Коментар викладача', sortable: false, value: 'comment' },
      ],
      items: require('../../mock/student-grades.json')
    }
  }
}
</script>
