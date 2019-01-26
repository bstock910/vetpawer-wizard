<template>
  <div class="column is-8 is-offset-2">
    <form>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="website" class="label">Website</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.website" placeholder="Office Website"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="facebook" class="label">Facebook URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.facebook" placeholder="Enter your Facebook page"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="twitter" class="label">Twitter URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.twitter" placeholder="Enter your Twitter page"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="instagram" class="label">Instagram URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.instagram" placeholder="Enter your Instagram page"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="googlePlus" class="label">Google Plus URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.googlePlus" placeholder="Enter your Google Plus page"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="yelpUrl" class="label">Yelp URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.yelp" placeholder="Enter your Yelp page"></div>
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
      socialMedia: {
        website: this.wizardData.socialMedia.website,
        facebook: this.wizardData.socialMedia.facebook,
        twitter: this.wizardData.socialMedia.twitter,
        instagram: this.wizardData.socialMedia.instagram,
        googlePlus: this.wizardData.socialMedia.googlePlus,
        yelp: this.wizardData.socialMedia.yelp
      }
    }
  }
}
</script>

<style scoped>
</style>
