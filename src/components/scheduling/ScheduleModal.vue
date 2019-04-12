<template>
  <div>
    <transition name="modal">
      <section>
        <form>
          <h5 class="subtitle is-5 has-text-centered">Open Hours for <strong>{{scheduleResource.name}} </strong> <small> ({{scheduleResource.id}})</small></h5>
          <div class="is-divider"></div>
          <div class="level">
            <label class="radio">
              <input type="radio" id="true" v-model="scheduleResource.useDefaultHours" :value="true"> Use default office hours
            </label>
          </div>
          <div class="level">
            <label class="radio">
              <input type="radio" id="false" v-model="scheduleResource.useDefaultHours" :value="false"> Set specific open hours
            </label>
          </div>
          {{scheduleResource}}
          <div v-if="!scheduleResource.useDefaultHours">
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
    </transition>
  </div>
</template>

<script>
import HoursSelection from '@/components/static/HoursSelection'

export default {
  components: {
    HoursSelection
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      scheduleResource: this.resource
    }
  },
  created () {
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
</style>
