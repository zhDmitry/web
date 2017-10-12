<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" @input="onOpen" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn color="primary" dark slot="activator">Показати розклад</v-btn>
      <v-card>
        <v-toolbar dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Розклад</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Зберегти</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div ref="calendar">
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import fullCalendar from 'fullcalendar'

const config = {
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,basicWeek,basicDay'
  },
  defaultDate: '2017-09-12',
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: [
    {
      title: 'All Day Event',
      start: '2017-09-01'
    },
    {
      title: 'Long Event',
      start: '2017-09-07',
      end: '2017-09-10'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2017-09-09T16:00:00'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2017-09-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2017-09-11',
      end: '2017-09-13'
    },
    {
      title: 'Meeting',
      start: '2017-09-12T10:30:00',
      end: '2017-09-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2017-09-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2017-09-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2017-09-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2017-09-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2017-09-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2017-09-28'
    }
  ]
}
export default {
  name: 'calendar',
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    onOpen(v) {
      if (v) {
        setTimeout(() => {
          $(this.$refs.calendar).fullCalendar(config)
        }, 1000)
      }
      this.$data.dialog = v;
    }
  }
}
</script>
