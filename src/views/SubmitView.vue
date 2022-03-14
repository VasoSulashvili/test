<template>
  <main class="min-h-screen grid grid-cols-1 place-content-center">
    <!-- <pre class="text-white">{{ $store.state.data }}</pre> -->
    <div class="mx-auto">
      <BaseButtonRounded class="block" title="Submit" @click="submitData()" />
      <router-link :to="{ name: 'redberrianInsight' }">
        <BaseButtonTransparent class="block mx-auto mt-4" title="go back" />
      </router-link>
    </div>
  </main>
</template>

<script>
import BaseButtonRounded from "../components/partials/BaseButtonRounded.vue";
import BaseButtonTransparent from "../components/partials/BaseButtonTransparent.vue";
import { RouterLink } from "vue-router";
export default {
  components: {
    BaseButtonRounded,
    BaseButtonTransparent,
    RouterLink,
  },
  methods: {
    async submitData() {
      // alert();
      const data = this.$store.state.data;
      const response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/application",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        this.$store.commit("submited");
        this.$router.push({ name: "thank" });
      }
    },
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
