<template>
  <div class="container">
    <section class="section content has-text-centered">
      <h2 class="subtitle is-3">Welcome to the <img src="../assets/img/logosmall.png"> setup wizard</h2>
      <p>Please review all the information that has been set on your account.</p>
      <hr>
      <h4 class="title is-4">Account Review</h4>
      <p class="subtitle is-6">Review account address, contact information, and social media presence</p>
      <router-link :to="{name: 'account'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <!--
      <hr>
      <h4 class="title is-4">Communication Review</h4>
      <p class="subtitle is-6">Review all settings tied to automated email, text, and phone processing</p>
      <router-link :to="{name: 'communication'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Card Review</h4>
      <p class="subtitle is-6">Review all settings tied to automated card delivery</p>
      <router-link :to="{name: 'cards'}"><button class="button is-info">
        Get Started
      </button></router-link> -->
      <hr>
      <h4 class="title is-4">Online Scheduling Review</h4>
      <p class="subtitle is-6">Review all settings tied to your online scheduling system, allowing your clients to book online</p>
      <router-link :to="{name: 'scheduling'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <!--
      <hr>
      <h4 class="title is-4">Survey Review</h4>
      <p class="subtitle is-6">Review all settings tied to automated survey invitations</p>
      <router-link :to="{name: 'survey'}"><button class="button is-info">
        Get Started
      </button></router-link>-->
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
