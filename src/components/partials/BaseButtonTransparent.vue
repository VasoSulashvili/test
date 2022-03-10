<template>
  <button class="text-white">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
button {
  font-size: 24px;
  line-height: 29px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-decoration-line: underline;
}
</style>
