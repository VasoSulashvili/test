import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "../views/WelcomeView.vue";
import applicationsList from "../views/ApplicationsListView.vue";
import QuestionView from "../views/questions/QuestionView.vue";
import PersonalInfoView from "../views/questions/pages/PersonalInfoView.vue";
import TechnicalSkillView from "../views/questions/pages/TechnicalSkillView.vue";
import CovidView from "../views/questions/pages/TechnicalSkillView.vue";
// import TechnicalSkillView from "../views/questions/pages/views/TechnicalSkillView.vue";

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
      path: "/questions",
      name: "questions",
      component: QuestionView,
      children: [
        {
          path: "personal/info",
          name: "personalInfo",
          component: PersonalInfoView,
          beforeEnter: (to, from) => {
            // reject the navigation
            return true;
          },
        },
        {
          path: "technical/skills",
          name: "technicalSkills",
          component: TechnicalSkillView,
          beforeEnter: (to, from) => {
            return true;
          },
        },
        {
          path: "covid",
          name: "covid",
          component: CovidView,
          beforeEnter: (to, from) => {
            // reject the navigation
            return true;
          },
        },
      ],
    },
  ],
});

export default router;
