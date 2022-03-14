<template>
  <main class="min-h-screen grid grid-cols-2">
    <pre class="text-white">{{ $store.state.data }}</pre>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  /* or 48px / 200% */

  letter-spacing: 0.05em;
}
</style>
