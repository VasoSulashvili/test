<template>
  <section class="my-10">
    <h2 class="mb-10">{{ sectionTitle }}</h2>
    <div>
      <slot name="body"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionTitle: String,
  },
};
</script>

<style scoped>
h2 {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;

  /* Redberry Red */

  color: #fe3b1f;
}
</style>
