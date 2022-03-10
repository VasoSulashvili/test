<template>
  <h1 class="text-rb-red font-rb-rowdies-reg text-center">
    {{ greetingMessage }}
  </h1>
</template>

<script>
export default {
  props: {
    greetingMessage: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 96px;
  line-height: 119px;
}
</style>
