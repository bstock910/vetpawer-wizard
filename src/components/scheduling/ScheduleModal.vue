<template>
  <div class="modal">
    {{isProvider}}
    <br>
    {{resourceId}}
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
      resourceId: this.id
    }
  }
}
</script>

<style scoped>
</style>
