<template>
  <div class="column is-8 is-offset-2">
    <form>
      <h5 class="subtitle is-5 has-text-centered">Office Manager</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="managerName" class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="name" v-model="users.officeManager.name" placeholder="Office Manager Name" /></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="managerEmail" class="label">Email Address</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="managerEmail" v-model="users.officeManager.email" placeholder="Office Manager Email Address" /></div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Accountant</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="managerName" class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="name" v-model="users.accountant.name" placeholder="Office Manager Name" /></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="managerEmail" class="label">Email Address</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" name="managerEmail" v-model="users.accountant.email" placeholder="Office Manager Email Address" /></div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Providers</h5>
      <div v-for="(provider,index) in users.providers" :key="index">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="managerName" class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control"><input type="text" class="input" name="name" v-model="provider.name" placeholder="Office Manager Name" /></div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="managerEmail" class="label">Email Address</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control"><input type="text" class="input" name="managerEmail" v-model="provider.email" placeholder="Office Manager Email Address" /></div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Office Staff</h5>
      <div v-for="(staff, index) in users.frontOffice" :key="index" class="field">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="managerName" class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control"><input type="text" class="input" name="name" v-model="staff.name" placeholder="Office Manager Name" /></div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="managerEmail" class="label">Email Address</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control"><input type="text" class="input" name="managerEmail" v-model="staff.email" placeholder="Office Manager Email Address" /></div>
            </div>
          </div>
        </div>
        <div v-if="!isLast(staff[index])">
          <hr>
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
      users: {
        officeManager: this.wizardData.users.officeManager,
        accountant: this.wizardData.users.accountant,
        providers: this.wizardData.users.providers,
        frontOffice: this.wizardData.users.frontOffice
      }
    }
  },
  computed: {
    isLast (input) {
      console.log(input)
      return true
    }
  }
}
</script>

<style scoped>
</style>
