<template>
  <div>
    <form>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="name" class="label">Office Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" name="name" placeholder="Office Name" v-model="account.name" /></div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Office Address</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="address1" class="label">Address</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" name="address1" class="input is-static" placeholder="Line 1" v-model="account.address.line1">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" name="address2" class="input is-static" placeholder="Line 2" v-model="account.address.line2">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="city" class="label">City</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" class="input is-static" placeholder="City" v-model="account.address.city">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="state" class="label">State</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="State" v-model="account.address.state"></div></div>
          <div class="field-label is-normal"><label for="state" class="label">ZIP</label></div>
          <div class="field-body"><div class="control"><input type="text" class="input is-static" placeholder="Postal Code" v-model="account.address.postCode"></div></div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Contact Information</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="email" class="label">Email Address</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" class="input is-static" placeholder="Email Address" v-model="account.notificationEmail">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="phone" class="label">Phone Number</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text" class="input is-static" placeholder="Phone Number" v-model="account.phone">
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="subtitle is-5 has-text-centered">Social Media</h5>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="website" class="label">Website</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Website" v-model="socialMedia.website"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="facebook" class="label">Facebook URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Facebook URL" v-model="socialMedia.facebook"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="twitter" class="label">Twitter URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Twitter URL" v-model="socialMedia.twitter"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="instagram" class="label">Instagram URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Instagram URL" v-model="socialMedia.instagram"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="googlePlus" class="label">Google Plus URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Google Plus URL" v-model="socialMedia.googlePlus"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="yelpUrl" class="label">Yelp URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input is-static" placeholder="Yelp URL" v-model="socialMedia.yelp"></div>
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
      account: {
        name: this.wizardData.name,
        address: {
          line1: this.wizardData.address.line1,
          line2: this.wizardData.address.line2,
          city: this.wizardData.address.city,
          state: this.wizardData.address.state,
          postCode: this.wizardData.address.postCode
        },
        notificationEmail: this.wizardData.notificationEmail,
        phone: this.wizardData.phone
      },
      socialMedia: {
        website: this.wizardData.socialMedia.website,
        facebook: this.wizardData.socialMedia.facebook,
        twitter: this.wizardData.socialMedia.twitter,
        instagram: this.wizardData.socialMedia.instagram,
        googlePlus: this.wizardData.socialMedia.googlePlus,
        yelp: this.wizardData.socialMedia.yelp
      },
      users: {
        officeManager: this.wizardData.users.officeManager,
        accountant: this.wizardData.users.accountant,
        providers: this.wizardData.users.providers,
        frontOffice: this.wizardData.users.frontOffice
      }
    }
  }
}
</script>

<style scoped>
</style>
