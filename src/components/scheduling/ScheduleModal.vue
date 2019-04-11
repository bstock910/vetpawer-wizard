<template>
  <div>
        <h2>{{isProvider}}</h2>
        <br>
        <h2>{{selectedProvider}}</h2>
        <HoursSelection></HoursSelection>
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
  data () {
    return {
      isProvider: this.byProvider,
      resourceId: this.id,
      selectedProvider: {},
      selectedColumn: {},
      pimsData: {
        columns: [],
        providers: []
      }
    }
  },
  created () {
    this.$store
      .dispatch('getPimsData')
      .then(this.pimsData.columns = this.$store.pimsData.columns)
      .then(this.pimsData.providers = this.$store.pimsData.providers)
    if (this.isProvider) {
      for (let i = 0; i < this.pimsData.providers.length; i++) {
        if (this.pimsData.providers[i].id === this.resourceId) {
          this.selectedProvider = this.pimsData.providers[i]
        }
      }
    } else {
      for (let i = 0; i < this.pimsData.columns.length; i++) {
        if (this.pimsData.columns[i].id === this.resourceId) {
          this.selectedColumn = this.pimsData.columns[i]
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
