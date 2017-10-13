<template>
  <div>
    <v-card>
      <v-card-title>
        <div>
          <p>Вітаємо, {{ this.$store.state.fullName }}</p>
          <span class="h5 m-0">Успішність студентів</span>
        </div>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Пошук" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
        <template slot="items" scope="props">
          <td class="text-xs-right">{{ props.item.subject }}</td>
          <td class="text-xs-right">{{ props.item.group }}</td>
          <td class="text-xs-right">{{ props.item.avg_mark }}</td>
          <td class="text-xs-right">{{ props.item.max_mark }}</td>
          <td class="text-xs-right">{{ props.item.min_mark }}</td>
          <td class="text-xs-right">{{ props.item.percentage_succeeded }}</td>
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
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        { text: 'Дисципліна', value: 'subject' },
        { text: 'Група', value: 'group' },
        { text: 'Середня оцінка', value: 'avg_mark' },
        { text: 'Макс. оцінка', value: 'max_mark' },
        { text: 'Мін. Оцінка', value: 'min_mark' },
        { text: '% студентів що завершили всі наявні тести', value: 'percentage_succeeded' },
      ],
      items: require('../../mock/performance.json'),
      dialog: false,
      canCreate: ['admin', 'methodist',' teacher'].includes(this.$store.state.role)
    }
  }
}
</script>
