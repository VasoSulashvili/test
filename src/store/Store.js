import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      submited: false,
      token_stolen: "004599cc-9364-4ff9-bb87-48a276728275",
      ui: {
        skills: [],
        applications: [],
      },
      data: {
        token: "7b6509c7-1a2a-4ee9-838a-e9406fcc1d92",

        // personal info
        first_name: null,
        last_name: null,
        email: null,
        phone: null,

        // skills
        skills: [
          // {
          //   id: 1,
          //   experience: 3,
          //   title: null,
          // },
        ],
        // covid
        work_preference: null, //"from_home",
        had_covid: null,
        had_covid_at: null,
        vaccinated: null,
        vaccinated_at: null,
        //redberrian
        will_organize_devtalk: null,
        devtalk_topic: null,
        something_special: null,
      },
    };
  },
  actions: {
    async setSkills(context) {
      const response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/skills"
      );
      if (response.ok) {
        const data = await response.json();
        context.commit("setSkills", await data);
      }
      // const skills = await response.json();
    },
  },
  mutations: {
    setSkills(state, payload) {
      state.ui.skills = payload;
    },
    setApplications(state, payload) {
      state.ui.applications = payload;
    },
    setPersonalInfo(state, payload) {
      state.data.first_name = payload.first_name;
      state.data.last_name = payload.last_name;
      state.data.email = payload.email;
      state.data.phone = payload.phone;
    },
    setTechnicalSkills(state, payload) {
      state.data.skills = payload;
    },
    setCovid(state, payload) {
      state.data.work_preference = payload.work_preference;
      state.data.had_covid = payload.had_covid;
      state.data.had_covid_at = payload.had_covid_at;
      state.data.vaccinated = payload.vaccinated;
      state.data.vaccinated_at = payload.vaccinated_at;
    },
    setRedberrianInsight(state, payload) {
      state.data.will_organize_devtalk = payload.will_organize_devtalk;
      state.data.devtalk_topic = payload.devtalk_topic;
      state.data.something_special = payload.something_special;
    },
    submited(state) {
      state.submited = true;
    },
  },
});
export { store };
