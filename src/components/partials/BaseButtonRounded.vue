<template>
  <button class="rounded-full px-10 text-white bg-rb-red">{{ title }}</button>
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
  width: 395px;
  height: 79px;
  font-size: 24px;
  line-height: 29px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
}
</style>
