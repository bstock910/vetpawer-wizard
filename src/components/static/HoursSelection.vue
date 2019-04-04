<template>
  <div class="select is-rounded is-info">
    <select v-bind:value="value" :disabled="disable" v-on:select="$emit('select',$event.target.value)">
      <option disabled value="">Please select</option>
      <option value="360">6:00 AM</option>
      <option value="375">6:15 AM</option>
      <option value="390">6:30 AM</option>
      <option value="405">6:45 AM</option>
      <option value="420">7:00 AM</option>
      <option value="435">7:15 AM</option>
      <option value="450">7:30 AM</option>
      <option value="465">7:45 AM</option>
      <option value="480">8:00 AM</option>
      <option value="495">8:15 AM</option>
      <option value="510">8:30 AM</option>
      <option value="525">8:45 AM</option>
      <option value="540">9:00 AM</option>
      <option value="555">9:15 AM</option>
      <option value="570">9:30 AM</option>
      <option value="585">9:45 AM</option>
      <option value="600">10:00 AM</option>
      <option value="615">10:15 AM</option>
      <option value="630">10:30 AM</option>
      <option value="645">10:45 AM</option>
      <option value="660">11:00 AM</option>
      <option value="675">11:15 AM</option>
      <option value="690">11:30 AM</option>
      <option value="705">11:45 AM</option>
      <option value="720">12:00 PM</option>
      <option value="735">12:15 PM</option>
      <option value="750">12:30 PM</option>
      <option value="765">12:45 PM</option>
      <option value="780">1:00 PM</option>
      <option value="795">1:15 PM</option>
      <option value="810">1:30 PM</option>
      <option value="825">1:45 PM</option>
      <option value="840">2:00 PM</option>
      <option value="855">2:15 PM</option>
      <option value="870">2:30 PM</option>
      <option value="885">2:45 PM</option>
      <option value="900">3:00 PM</option>
      <option value="915">3:15 PM</option>
      <option value="930">3:30 PM</option>
      <option value="945">3:45 PM</option>
      <option value="960">4:00 PM</option>
      <option value="975">4:15 PM</option>
      <option value="990">4:30 PM</option>
      <option value="1005">4:45 PM</option>
      <option value="1020">5:00 PM</option>
      <option value="1035">5:15 PM</option>
      <option value="1050">5:30 PM</option>
      <option value="1065">5:45 PM</option>
      <option value="1080">6:00 PM</option>
      <option value="1095">6:15 PM</option>
      <option value="1110">6:30 PM</option>
      <option value="1125">6:45 PM</option>
      <option value="1140">7:00 PM</option>
      <option value="1155">7:15 PM</option>
      <option value="1170">7:30 PM</option>
      <option value="1185">7:45 PM</option>
      <option value="1200">8:00 PM</option>
      <option value="1215">8:15 PM</option>
      <option value="1230">8:30 PM</option>
      <option value="1245">8:45 PM</option>
      <option value="1260">9:00 PM</option>
      <option value="1275">9:15 PM</option>
      <option value="1290">9:30 PM</option>
      <option value="1305">9:45 PM</option>
      <option value="1320">10:00 PM</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['value', 'disable'],
  onInit () {
    console.log(this.props)
  }
}
</script>

<style scoped>
</style>
