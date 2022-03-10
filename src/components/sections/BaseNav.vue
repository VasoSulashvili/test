<template>
  <div class="flex items-center place-content-center mt-10">
    <button v-if="!viewError">
      <RouterLink :to="{ name: previousView }">
        <img src="./../../assets/images/Previous.png" alt="" srcset="" />
      </RouterLink>
    </button>
    <img v-else src="./../../assets/images/Previous.png" alt="" srcset="" />
    <span></span><span></span><span></span><span></span>
    <button v-if="!viewError">
      <RouterLink :to="{ name: nextView }">
        <img src="./../../assets/images/Next.png" alt="" srcset="" />
      </RouterLink>
    </button>
    <img v-else src="./../../assets/images/Next.png" alt="" srcset="" />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  props: {
    previousView: String,
    nextView: String,
    viewError: Boolean,
  },
};
</script>

<style scoped>
span {
  width: 19px;
  height: 19px;
  display: inline-block;
  margin: 0 5px;
  border-radius: 100%;

  /* Redberry Red */

  background: #fe3b1f;
  opacity: 0.1;
}
</style>
