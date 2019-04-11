<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered is-large">Schedule Selection</h5>
      <div class="is-divider"></div>
      <div v-if="software === 'AVIMark'">
        <p class="subtitle has-text-centered is-medium">How do you manage your appointment calendar?</p>
        <div class="level">
          <label class="radio">
            <input type="radio" id="true" v-model="scheduleByProvider" v-bind:value="true"> By provider <button v-tooltip="{
  content: 'Choose this option if the schedule is managed by doctor or provider (John Smith DVM, Jane Doe DVM, Technician, etc.)',
  placement: 'right-end',
  classes: ['tooltip-info'],
  targetClasses: ['it-has-a-tooltip']
}">Button</button>
          </label>
        </div>
        <div class="level">
          <label class="radio">
            <input type="radio" id="false" v-model="scheduleByProvider" v-bind:value="false"> By room <button v-tooltip="{
  content: 'Choose this option if the schedule is managed by room (Exam Room 1, Grooming, Surgery, etc.)',
  placement: 'right-start',
  classes: ['tooltip-info'],
  targetClasses: ['it-has-a-tooltip']
}">Button</button>
          </label>
        </div>
      </div>
      <div v-if="scheduleByProvider">
        <h5 class="subtitle has-text-centered is-medium">Choose providers available for scheduling</h5>
        <div class="columns is-multiline">
          <div v-for="provider in sortedProviders" :key="provider.id" class="column is-4">
            <input type="checkbox" class="checkbox" :value="provider" v-model="providersUsed">
            {{provider.name}} <span class="is-small">({{provider.id}})</span><br>
            <div class="is-small has-text-centered">{{provider.totalAppointments}} appointments</div>
            <button class="button" @click.prevent="openSpecificHoursForResource(scheduleByProvider,provider.id)">Open Hours</button>
          </div>
        </div>
      </div>
      <div v-else>
        <h5 class="subtitle has-text-centered is-medium">Choose columns available for scheduling</h5>
        <div class="columns is-multiline">
          <div v-for="column in sortedColumns" :key="column.id" class="column is-4">
            <input type="checkbox" class="checkbox" :value="column" v-model="columnsUsed">
            {{column.name}} <span class="is-small">({{column.id}})</span><br>
            <div class="is-small has-text-centered">{{column.totalAppointments}} appointments</div>
            <button class="button" @click.prevent="openSpecificHoursForResource(scheduleByProvider,column.id)">Open Hours</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ScheduleModal from '@/components/scheduling/ScheduleModal'
export default {
  props: {
    accountData: {
      type: Object,
      required: true
    },
    pimsData: {
      type: Object,
      required: true
    },
    scheduleOptions: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      software: this.accountData.software,
      scheduleByProvider: this.scheduleOptions.scheduleByProvider,
      officeHours: this.scheduleOptions.officeHours,
      columnsUsed: this.scheduleOptions.columnsUsed,
      providersUsed: this.scheduleOptions.providersUsed,
      pimsColumns: this.pimsData.columns,
      pimsProviders: this.pimsData.providers
    }
  },
  computed: {
    sortedProviders: function () {
      return this.pimsProviders.sort(
        (a, b) => b.totalAppointments - a.totalAppointments
      )
    },
    sortedColumns: function () {
      return this.pimsColumns.sort(
        (a, b) => b.totalAppointments - a.totalAppointments
      )
    }
  },
  methods: {
    openSpecificHoursForResource (byProvider, id) {
      this.$modal.show(
        ScheduleModal,
        {
          byProvider: byProvider,
          id: id
        },
        {
          adaptive: true,
          height: 'auto',
          minHeight: 800,
          width: '50%',
          minWidth: 500,
          scrollable: true,
          clickToClose: false
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
