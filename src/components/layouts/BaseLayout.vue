<template>
  <main class="h-screen grid grid-cols-2">
    <!-- Left -->
    <div class="pl-36 pr-20 py-24 bg-white">
      <div class="h-60">
        <slot name="left-side-header"></slot>
      </div>

      <slot name="left-side-body"></slot>
      <div>
        <BaseNav :view-error="viewError" />
      </div>
    </div>
    <!-- Right -->
    <div class="px-36 pr-20 py-24">
      <div class="h-60">
        <slot name="right-side-header"></slot>
      </div>
      <p class="font-rb-montserat-reg text-white">
        <slot name="right-side-body"></slot>
      </p>
    </div>
  </main>
</template>

<script>
import BaseNav from "./../sections/BaseNav.vue";
export default {
  components: {
    BaseNav,
  },
  props: {
    viewError: Boolean,
  },
};
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
