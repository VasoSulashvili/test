import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/Store";
import {
  // personalInfoMiddleware,
  technicalSkillsMiddleware,
  covidMiddleware,
  redberrianInsightMiddleware,
  submitMiddleware,
} from "../middlewares/middlewares";
import WelcomeView from "../views/WelcomeView.vue";
import ApplicationsList from "../views/ApplicationsListView.vue";
import SubmitView from "../views/SubmitView.vue";
import QuestionView from "../views/questions/QuestionView.vue";
import PersonalInfoView from "../views/questions/pages/PersonalInfoView.vue";
import TechnicalSkillView from "../views/questions/pages/TechnicalSkillView.vue";
import CovidView from "../views/questions/pages/CovidView.vue";
import RedberrianInsightView from "../views/questions/pages/RedberrianInsightView.vue";

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
      component: ApplicationsList,
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
            return true;
          },
        },
        {
          path: "technical/skills",
          name: "technicalSkills",
          component: TechnicalSkillView,
          beforeEnter: (to, from) => {
            return technicalSkillsMiddleware(
              router,
              "personalInfo",
              store.state.data
            );
          },
        },
        {
          path: "covid",
          name: "covid",
          component: CovidView,
          beforeEnter: (to, from) => {
            return covidMiddleware(router, "technicalSkills", store.state.data);
          },
        },
        {
          path: "redberrian/insight",
          name: "redberrianInsight",
          component: RedberrianInsightView,
          beforeEnter: (to, from) => {
            return redberrianInsightMiddleware(
              router,
              "covid",
              store.state.data
            );
          },
        },
      ],
    },
    {
      path: "/submit",
      name: "submit",
      component: SubmitView,
      beforeEnter: (to, from) => {
        return submitMiddleware(router, "redberrianInsight", store.state.data);
      },
    },
  ],
});

export default router;
