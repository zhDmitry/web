<template>
    <v-card>
        <v-card-title>
            Студенти
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
        </v-card-title>
        <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
            <template slot="items" scope="props">
                <td class="text-xs-right" @click="navigate(props.item.id)">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.university }}</td>
                <td class="text-xs-right">{{ props.item.faculty }}</td>
                <td class="text-xs-right">{{ props.item.speciality }}</td>
                <td class="text-xs-right">{{ props.item.year }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
                From {{ pageStart }} to {{ pageStop }}
            </template>
        </v-data-table>
    </v-card>
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
                { text: 'ПІБ', value: 'name' },
                { text: 'Університет', value: 'university' },
                { text: 'Факультет', value: 'faculty' },
                { text: 'Спеціальність', value: 'speciality' },
                { text: 'Курс', value: 'year' },
            ],
            items: require('../../mock/student.json')
        }
    },
    methods: {
        navigate(to) {
            this.$router.push('/student/' + to)
        },
    }
}
</script>
