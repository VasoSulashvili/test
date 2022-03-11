export default {
  state() {
    return {
      data: {
        token: "89nOpas|asdanjjh^&as",
        // personal info
        first_name: "sss",
        last_name: "gelashvili",
        email: "gelashvili@gela.ge",
        phone: "+995591933382",
        // skills
        skills: [
          // {
          //   id: 1,
          //   experience: 3,
          //   title: null,
          // },
        ],
        // covid
        work_preference: "from_home",
        had_covid: true,
        had_covid_at: "2022-02-23",
        vaccinated: true,
        vaccinated_at: "2022-02-23",
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
    setCovid(state, payload) {},
  },
};
