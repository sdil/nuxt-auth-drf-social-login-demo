<template>
  <section class="section">
      {{ user }}
  </section>
</template>

<script>

export default {
  middleware: 'auth',
  async fetch() {
    this.user = await this.$axios.get("http://localhost:8000/auth/user/")
    console.log(this.user)
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};

</script>

