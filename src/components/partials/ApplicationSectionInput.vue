<template>
  <p class="font-rb-montserat-reg my-8">
    <span id="label" class="inline-block">{{ label }}</span>
    <span id="value" class="inline-block">{{ value }}</span>
  </p>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>
#label {
  min-width: 102px;
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
}
#value {
  min-width: 139.71px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #454545;
}
</style>
