<template>
  <section class="w-full mb-12">
    <p class="font-rb-montserat-reg text-black mb-6">
      <slot name="question-text"></slot>
    </p>
    <div>
      <slot name="question-option"></slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
</style>
