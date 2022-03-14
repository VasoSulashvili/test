<template>
  <div>
    <div class="flex items-center place-content-center mt-10 space-x-3">
      <button v-if="!viewError">
        <RouterLink :to="{ name: previousRoute }">
          <img src="./../../assets/images/Previous.png" alt="" srcset="" />
        </RouterLink>
      </button>
      <img
        v-else
        src="./../../assets/images/Previous.png"
        alt=""
        srcset=""
        @click="$emit('callValidator')"
      />
      <span
        v-for="(route, index) in questionsRoutes"
        :key="index"
        :class="[index > questionRouteIndex ? 'dot-muted' : 'dot-unmuted']"
      ></span>
      <button v-if="!viewError">
        <RouterLink @click="$emit('setDataToStore')" :to="{ name: nextRoute }">
          <img src="./../../assets/images/Next.png" alt="" srcset="" />
        </RouterLink>
      </button>
      <img
        v-else
        src="./../../assets/images/Next.png"
        alt=""
        srcset=""
        @click="$emit('callValidator')"
      />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  emits: ["callValidator", "setDataToStore"],
  data() {
    return {
      nextRoute: null,
      previousRoute: null,
    };
  },
  computed: {
    questionsRoutes() {
      const questionsRoutes = this.$router.getRoutes().filter((route) => {
        return route.name == "questions";
      });
      let routesName = [];
      questionsRoutes[0].children.forEach((route) => {
        routesName.push(route.name);
      });

      return routesName;
    },
    questionRouteIndex() {
      return this.questionsRoutes.indexOf(this.$route.name);
    },
  },
  methods: {
    setArrowRoutes() {
      // const routes = this.$router.getRoutes();
      let routesName = [
        "welcome",
        "personalInfo",
        "technicalSkills",
        "covid",
        "redberrianInsight",
        "submit",
      ];
      // routes.forEach((route) => {
      //   routesName.push(route.name);
      // });
      const routeIndex = routesName.indexOf(this.$route.name);
      if (routeIndex == 0) {
        this.previousRoute = routesName[routesName.length - 1];
      } else {
        this.previousRoute = routesName[routeIndex - 1];
      }
      if (routeIndex + 1 == routesName.length) {
        this.nextRoute = routesName[0];
      } else {
        this.nextRoute = routesName[routeIndex + 1];
      }
    },
  },
  props: {
    viewError: Boolean,
  },
  created() {
    this.setArrowRoutes();
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
