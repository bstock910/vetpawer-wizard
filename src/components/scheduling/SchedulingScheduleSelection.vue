<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered is-large">Schedule Selection</h5>
      <div class="is-divider"></div>
      <div v-if="pimsData.software === 'AVIMark'">
        <p class="subtitle has-text-centered is-medium">How do you manage your appointment calendar?</p>
        <div class="level">
          <label class="radio">
            <input type="radio" id="true" v-model="settings.scheduleByProvider" value="true"> By provider
          </label>
        </div>
        <div class="level">
          <label class="radio">
            <input type="radio" id="false" v-model="settings.scheduleByProvider" value="false"> By room
          </label>
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
  }
}
</script>

<style scoped>

</style>
