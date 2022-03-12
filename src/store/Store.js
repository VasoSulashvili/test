export default {
  state() {
    return {
      data: {
        token: "89nOpas|asdanjjh^&as",
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
        will_organize_devtalk: true,
        devtalk_topic: "I would ...",
        something_special: "I am special!",
      },
    };
  },
  mutations: {
    setPersonalInfo(state, payload) {
      state.data.first_name = payload.firstName;
      state.data.last_name = payload.lastName;
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
  },
};
