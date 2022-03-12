<template>
  <p
    class="font-rb-montserat-reg text-rb-red mt-2"
    v-if="errorMessage || errorMessage == 'false'"
  >
    <span>* </span>
    {{ errorMessage }}
  </p>
</template>

<script>
export default {
  props: {
    errorMessage: String,
  },
};
</script>

<style scoped>
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
