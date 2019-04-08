<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered">Office Hours Selection</h5>
      <div class="is-divider"></div>
      <p class="has-text-weight-light has-text-centered">Please review the general office hours we have calculated based on your schedule usage.</p>
          <div>
            <div class="columns has-text-weight-semibold has-text-info has-text-centered"><div class="column is-3">Day</div>
              <div class="column is-2">Open</div>
              <div class="column is-3">From</div>
              <div class="column is-3">To</div>
            </div>
          </div>
          <div v-for="day in scheduleOptions.officeHours" :key="day.value">
            <div class="columns">
              <div class="column is-3">
                {{day.label}}
              </div>
              <div class="column is-2 has-text-centered">
                <label for="used" class="checkbox">
                  <input type="checkbox" v-model="day.open">
                </label>
              </div>
              <div class="column is-3">
                <HoursSelection v-model="day.start" :disable="!day.open"></HoursSelection>
              </div>
              <div class="column is-3">
                <HoursSelection v-model="day.end" :disable="!day.open"></HoursSelection>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div>
            <p>VetPawer has detected that your schedule is managed by <span class="has-text-weight-semibold">{{ (60 / scheduleOptions.unitsPerHour) }}</span>  minute intervals.</p>
          </div>
    </form>
  </div>
</template>

<script>
import HoursSelection from '@/components/static/HoursSelection'

export default {
  components: {
    HoursSelection
  },
  props: {
    wizardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      scheduleOptions: {
        unitsPerHour: this.wizardData.scheduleOptions.unitsPerHour,
        officeHours: this.wizardData.scheduleOptions.officeHours
      }
    }
  }
}
</script>

<style scoped>
</style>
