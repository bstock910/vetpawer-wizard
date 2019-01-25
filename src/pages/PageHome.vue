<template>
  <div class="container">
    <section class="section content has-text-centered">
      <h2 class="subtitle is-3">Welcome to the <img src="../assets/img/logosmall.png"> setup wizard</h2>
      <p>This will walk you through all steps necessary to set up and manage your account.</p>
      <p>You will be able to revisit any of these settings at a later time.</p>
      <hr>
      <h4 class="title is-4">Account Setup</h4>
      <p class="subtitle is-6">Manage account address, contact information, and social media presence</p>
      <router-link :to="{name: 'account'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Communication Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated email, text, and phone processing</p>
      <router-link :to="{name: 'communication'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Card Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated card delivery</p>
      <router-link :to="{name: 'cards'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Online Scheduling Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to your online scheduling system, allowing your clients to book online</p>
      <router-link :to="{name: 'scheduling'}"><button class="button is-info">
        Get Started
      </button></router-link>
      <hr>
      <h4 class="title is-4">Survey Setup</h4>
      <p class="subtitle is-6">Manage all settings tied to automated survey invitations</p>
      <router-link :to="{name: 'survey'}"><button class="button is-info">
        Get Started
      </button></router-link>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
