<template>
  <section class="section">
    <b-button @click="loginWithGoogle()" icon-left="google">
      Sign in with Google
    </b-button>
  </section>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith("google");
    },
  },
};
</script>
