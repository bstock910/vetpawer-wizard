<template>
  <div>
    <section>
        <form>
          <h5 class="subtitle is-5 has-text-centered">Open Hours for <strong>{{selectedResource.name}} </strong> <small> ({{selectedResource.id}})</small></h5>
          <div class="is-divider"></div>
          <div class="level">
            <label class="radio">
              <input type="radio" id="true" v-model="selectedResource.useDefaultHours" v-bind:value="true"> Use default office hours
            </label>
          </div>
          <div class="level">
            <label class="radio">
              <input type="radio" id="false" v-model="selectedResource.useDefaultHours" v-bind:value="false"> Set specific open hours
            </label>
          </div>
          <div v-if="!selectedResource.useDefaultHours">
            <div>
              <div class="columns has-text-weight-semibold has-text-info has-text-centered"><div class="column is-3">Day</div>
                <div class="column is-2">Open</div>
                <div class="column is-3">From</div>
                <div class="column is-3">To</div>
              </div>
            </div>
            <div v-for="day in officeHours" :key="day.value">
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
          </div>
          <div class="spacer"></div>
        </form>
    </section>
  </div>
</template>

<script>
import HoursSelection from '@/components/static/HoursSelection'

export default {
  components: {
    HoursSelection
  },
  props: {
    byProvider: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    useDefault: {
      type: Boolean
    },
    specificHours: {
      type: Object
    }
  },
  data() {
    return {
      isProvider: this.byProvider,
      resourceId: this.id,
      selectedResource: {},
      pimsData: {
        columns: [],
        providers: []
      },
      officeHours: {}
    }
  },
  created () {
    this.$store
      .dispatch('getScheduleOptions')
      .then((this.officeHours = this.$store.scheduleOptions.officeHours))
    this.$store
      .dispatch('getPimsData')
      .then((this.pimsData.columns = this.$store.pimsData.columns))
      .then((this.pimsData.providers = this.$store.pimsData.providers))
    if (this.isProvider) {
      for (let i = 0; i < this.pimsData.providers.length; i++) {
        if (this.pimsData.providers[i].id === this.resourceId) {
          this.selectedResource = this.pimsData.providers[i]
        }
      }
    } else {
      for (let i = 0; i < this.pimsData.columns.length; i++) {
        if (this.pimsData.columns[i].id === this.resourceId) {
          this.selectedResource = this.pimsData.columns[i]
        }
      }
    }
    this.selectedResource.useDefaultHours =
      'useDefaultHours' in this.selectedResource
        ? this.selectedResource.useDefaultHours
        : true
  }
}
</script>

<style scoped>
</style>
