import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import PersonalInfoView from "../views/PersonalInfoView.vue";
import applicationsList from "../views/ApplicationsListView.vue";
import TechnicalSkillView from "../views/TechnicalSkillView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/applications/list",
      name: "applicationsList",
      component: applicationsList,
    },
    {
      path: "/personal/info",
      name: "personalInfo",
      component: PersonalInfoView,
    },
    {
      path: "/technical/skills",
      name: "technicalSkills",
      component: TechnicalSkillView,
    },
  ],
});

export default router;
