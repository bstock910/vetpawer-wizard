<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered is-large">Schedule Selection</h5>
      <div class="is-divider"></div>
      <div v-if="pimsData.software === 'AVIMark'">
        <p class="subtitle has-text-centered is-medium">How do you manage your appointment calendar?</p>
        <div class="level">
          <label class="radio">
            <input type="radio" id="true" v-model="settings.scheduleByProvider" v-bind:value="true"> By provider <button v-tooltip="{
  content: 'Choose this option if the schedule is managed by doctor or provider (John Smith DVM, Jane Doe DVM, Technician, etc.)',
  placement: 'right-end',
  classes: ['tooltip-info'],
  targetClasses: ['it-has-a-tooltip']
}">Button</button>
          </label>
        </div>
        <div class="level">
          <label class="radio">
            <input type="radio" id="false" v-model="settings.scheduleByProvider" v-bind:value="false"> By room <button v-tooltip="{
  content: 'Choose this option if the schedule is managed by room (Exam Room 1, Grooming, Surgery, etc.',
  placement: 'right-start',
  classes: ['tooltip-info'],
  targetClasses: ['it-has-a-tooltip']
}">Button</button>
          </label>
        </div>
      </div>
      <div v-if="settings.scheduleByProvider">
        <h5 class="subtitle has-text-centered is-medium">Choose providers available for scheduling</h5>
        <div class="columns is-multiline">
          <div v-for="provider in sortedProviders" :key="provider.id" class="column is-4">
            <input type="checkbox" class="checkbox" :value="provider.id" v-model="settings.providersUsed">
            {{provider.name}} <span class="is-small">({{provider.id}})</span><br>
            <span class="is-small has-text-centered">{{provider.totalAppointments}} appointments</span>
          </div>
        </div>
      </div>
      <div v-else>
        <h5 class="subtitle has-text-centered is-medium">Choose columns available for scheduling</h5>
        <div class="columns is-multiline">
          <div v-for="column in sortedColumns" :key="column.id" class="column is-4">
            <input type="checkbox" class="checkbox" :value="column.id" v-model="settings.columnsUsed">
            {{column.name}} <span class="is-small">({{column.id}})</span><br>
            <span class="is-small has-text-centered">{{column.totalAppointments}} appointments</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    wizardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      pimsData: {
        software: this.wizardData.account.software,
        providers: this.wizardData.pimsData.providers,
        columns: this.wizardData.pimsData.columns
      },
      settings: {
        scheduleByProvider: this.wizardData.scheduleOptions.scheduleByProvider,
        providersUsed: this.wizardData.scheduleOptions.providersUsed,
        columnsUsed: this.wizardData.scheduleOptions.columnsUsed
      }
    }
  },
  computed: {
    sortedProviders: function () {
      return this.pimsData.providers.sort((a, b) => b.totalAppointments - a.totalAppointments)
    },
    sortedColumns: function () {
      return this.pimsData.columns.sort((a, b) => b.totalAppointments - a.totalAppointments)
    }
  }
}
</script>

<style scoped>

</style>
