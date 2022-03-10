<template>
  <main class="h-screen pt-28">
    <TheGreeting greeting-message="Welcome Rocketeer !" />

    <div class="text-center mt-20">
      <RouterLink :to="{ name: 'personalInfo' }"
        ><BaseButtonRounded title="Start Questionnaire"
      /></RouterLink>
    </div>

    <div class="text-center mt-10">
      <RouterLink :to="{ name: 'applicationsList' }"
        ><BaseButtonTransparent title="Submitted Applications"
      /></RouterLink>
    </div>
    <div>
      <img
        class="mx-auto"
        src="../assets/images/rocketman.png"
        alt=""
        srcset=""
      />
    </div>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";
import TheGreeting from "../components/partials/TheGreeting.vue";
import BaseButtonRounded from "../components/partials/BaseButtonRounded.vue";
import BaseButtonTransparent from "../components/partials/BaseButtonTransparent.vue";
export default {
  components: {
    RouterLink,
    TheGreeting,
    BaseButtonRounded,
    BaseButtonTransparent,
  },
};
</script>

<style scoped>
main {
  background-image: url("../assets/images/stars.png");
  background-size: cover;
}
</style>
