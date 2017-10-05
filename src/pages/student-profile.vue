<template>
    <div>
        <v-card>
            <v-card-title>
                Профайл студента
            </v-card-title>

        </v-card>
        <v-card>
            <v-card-title>
                Предмети
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.teacher }}</td>
                    <td class="text-xs-right">{{ props.item.group }}</td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>
        <v-card>
            <v-card-title>
                План тестів
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.teacher }}</td>
                    <td class="text-xs-right">{{ props.item.group }}</td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>
        <v-card>
            <v-card-title>
                Щоденник
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.teacher }}</td>
                    <td class="text-xs-right">{{ props.item.group }}</td>
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
    name: 'student-profile',
    data() {
        return {
            tmp: '',
            search: '',
            pagination: {},
            headers: [
                {
                    text: 'Назва',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Группа', value: 'group' },
                { text: 'Викладач', value: 'teacher' },
            ],
            items: require('../../mock/student-mock.json')
        }
    }
}
</script>
