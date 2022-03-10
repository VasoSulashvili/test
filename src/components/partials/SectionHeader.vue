<template>
  <h1 class="text-rb-red mb-20 font-rb-rowdies-reg">{{ sectionHeader }}</h1>
</template>

<script>
export default {
  props: {
    sectionHeader: String,
  },
};
</script>

<style scoped>
h1 {
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 79px;
}
</style>
