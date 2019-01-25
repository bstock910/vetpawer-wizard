<template>
  <div class="column is-8 is-offset-2">
    <form>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="website" class="label">Website</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.website"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="facebook" class="label">Facebook URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.facebook"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="twitter" class="label">Twitter URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.twitter"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="instagram" class="label">Instagram URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.instagram"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="googlePlus" class="label">Google Plus URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.googlePlus"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="yelpUrl" class="label">Yelp URL</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.yelp"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="yelpId" class="label">Yelp ID</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.yelpId"></div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal"><label for="googlePlacesId" class="label">Google Places ID</label></div>
        <div class="field-body">
          <div class="field">
            <div class="control"><input type="text" class="input" v-model="socialMedia.googleId"></div>
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
        yelp: this.wizardData.socialMedia.yelp,
        yelpId: this.wizardData.socialMedia.yelpId,
        googleId: this.wizardData.socialMedia.googleId
      }
    }
  }
}
</script>

<style scoped>
</style>
