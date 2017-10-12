<template>
  <div>
    <v-card>
      <v-card-title>
        Розклад
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
        <template slot="items" scope="props">
          <td>{{ props.item.subject }}</td>
          <td class="text-xs-right">{{ props.item.group }}</td>
          <td class="text-xs-right">{{ props.item.teacher }}</td>
          <td class="text-xs-right">
            <calendar />
          </td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Calendar from './calendar';
export default {
  components: { Calendar },
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
        { text: 'Група', sortable: true, value: 'group' },
        { text: 'Викладач', sortable: true, value: 'teacher' },
      ],
      items: require('../../mock/student-mock.json')
    }
  }
}
</script>
