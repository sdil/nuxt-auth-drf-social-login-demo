<template>
  <section class="section">
      {{ $auth.user.email }}
  </section>
</template>

<script>

export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};

</script>

