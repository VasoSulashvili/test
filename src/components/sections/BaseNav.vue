<template>
  <div>
    <pre>{{ routes }}</pre>
    <pre>{{ routeIndex }}</pre>

    <div class="flex items-center place-content-center mt-10">
      <button v-if="!viewError">
        <RouterLink :to="{ name: previousView }">
          <img src="./../../assets/images/Previous.png" alt="" srcset="" />
        </RouterLink>
      </button>
      <img v-else src="./../../assets/images/Previous.png" alt="" srcset="" />
      <span
        v-for="(route, index) in routes"
        :key="index"
        :class="[index > routeIndex ? 'dot-muted' : 'dot-unmuted']"
      ></span>
      <button v-if="!viewError">
        <RouterLink :to="{ name: nextView }">
          <img src="./../../assets/images/Next.png" alt="" srcset="" />
        </RouterLink>
      </button>
      <img v-else src="./../../assets/images/Next.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  computed: {
    routes() {
      const questionsRoutes = this.$router.getRoutes().filter((route) => {
        return route.name == "questions";
      });
      let routesName = [];
      questionsRoutes[0].children.forEach((route) => {
        routesName.push(route.name);
      });
      return routesName;
    },
    routeIndex() {
      return this.routes.indexOf(this.$route.name);
    },
  },
  methods: {},
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
}
.dot-muted {
  opacity: 0.1;
}
.dot-unmuted {
  opacity: 1;
}
</style>
