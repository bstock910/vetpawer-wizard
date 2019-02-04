<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered">Office Hours Selection</h5>
      <p class="has-text-weight-light has-text-centered">Please review the general office hours we have calculated based on your schedule usage.</p>
      <div>
        <div class="columns has-text-weight-semibold has-text-primary"><div class="column is-3">Day</div>
          <div class="column is-2">Open</div>
          <div class="column is-3">From</div>
          <div class="column is-3">To</div></div>
      </div>
      <div v-for="day in scheduleOptions.officeHours" :key="day.value" class="field is-horizontal">
        <div class="columns">
          <div class="column">
            {{day.label}}
          </div>
          <div class="column">
            <label for="used" class="checkbox">
              <input type="checkbox" v-model="day.open">
            </label>
          </div>
          <div class="column"></div>
          <div class="column"></div>
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
      scheduleOptions: {
        unitsPerHour: this.wizardData.unitsPerHour,
        officeHours: this.wizardData.officeHours
      }
    }
  }
}
</script>

<style scoped>

</style>
