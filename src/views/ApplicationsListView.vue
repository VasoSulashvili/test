<template>
  <main class="min-h-screen pt-36 grid grid-cols-1">
    <div class="mx-auto w-8/12">
      <!-- <pre>{{ skills }}</pre> -->
      <h1 class="font-rb-rowdies-reg text-white mb-16 pl-8">
        Submitted Applications
      </h1>
      <!-- <pre class="text-white"
        >{{ applications }} {{ this.$store.state.ui.applications }}</pre
      > -->

      <div class="mb-2" v-for="(item, index) in applications" :key="index">
        <h2
          class="bg-rb-red px-5 py-2 text-white"
          @click="activeTab = 'tab_' + index"
        >
          {{ index + 1 }}
        </h2>

        <div
          class="py-8 px-20 bg-white grid grid-cols-2"
          v-if="activeTab == 'tab_' + index"
        >
          <!-- Personal Info -->
          <ApplicationSection section-title="Personal Information">
            <template v-slot:body>
              <ApplicationSectionInput
                label="First Name"
                :value="item.first_name"
              />
              <ApplicationSectionInput
                label="Last Name"
                :value="item.last_name"
              />
              <ApplicationSectionInput label="First Name" :value="item.email" />
              <ApplicationSectionInput label="Phone" :value="item.phone" />
            </template>
          </ApplicationSection>
          <!-- END::Personal Info -->
          <!-- Skills -->
          <ApplicationSection section-title="Skills">
            <template v-slot:body>
              <ApplicationSectionInput
                v-for="skill in item.skills"
                :key="skill.id"
                :label="skills[skill.id].title"
                :value="'Years of Experience: ' + skill.experience"
              />
            </template>
          </ApplicationSection>
          <!-- END::Skills -->
          <!-- Covid -->
          <ApplicationSection section-title="Covid Situation">
            <template v-slot:body>
              <ApplicationSectionRadio
                question="how would you prefer to work?"
                :answer="item.work_preference"
                :answer-options="work_preference_options"
              />
              <ApplicationSectionRadio
                question="Did you have covid 19?"
                :answer="item.had_covid"
                :answer-options="had_covid_options"
              />
              <ApplicationSectionDate
                v-if="item.had_covid"
                question="When did you have covid 19?"
                :date="item.had_covid_at.replaceAll('-', '/')"
              />
              <ApplicationSectionRadio
                question="Have you been vaccinated?"
                :answer="item.vaccinated"
                :answer-options="vaccinated_options"
              />
              <ApplicationSectionDate
                question="When did you get covid vaccine?"
                v-if="item.vaccinated"
                :date="item.vaccinated_at.replaceAll('-', '/')"
              />
            </template>
          </ApplicationSection>
          <!-- END::Covid -->
          <!-- Insigts -->
          <ApplicationSection section-title="Insigts">
            <template v-slot:body>
              <ApplicationSectionRadio
                question="Would you attend Devtalks and maybe also organize your own?"
                :answer="item.will_organize_devtalk"
                :answer-options="will_organize_devtalk_options"
              />
              <ApplicationSectionTextArea
                question="Would you attend Devtalks and maybe also organize your own?"
                :text="item.devtalk_topic"
                v-if="item.will_organize_devtalk"
              />
              <ApplicationSectionTextArea
                question="Tell us somthing special"
                :text="item.something_special"
              />
            </template>
          </ApplicationSection>
          <!-- END::Insigts -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ApplicationSection from "../components/sections/ApplicationSection.vue";
import ApplicationSectionInput from "../components/partials/ApplicationSectionInput.vue";
import ApplicationSectionRadio from "../components/partials/ApplicationSectionRadio.vue";
import ApplicationSectionDate from "../components/partials/ApplicationSectionDate.vue";
import ApplicationSectionTextArea from "../components/partials/ApplicationSectionTextArea.vue";
export default {
  components: {
    ApplicationSection,
    ApplicationSectionInput,
    ApplicationSectionRadio,
    ApplicationSectionDate,
    ApplicationSectionTextArea,
  },
  data() {
    return {
      skills: [],
      applications: [],
      activeTab: null,
      work_preference_options: [
        { title: "From Home", value: "from_home" },
        { title: "From Sairme Office", value: "from_office" },
        { title: "Hybrid", value: "hybrid" },
      ],
      had_covid_options: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
      vaccinated_options: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
      will_organize_devtalk_options: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    };
  },
  methods: {
    async setApplications() {
      const response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/applications?token=004599cc-9364-4ff9-bb87-48a276728275"
      );
      if (response.ok) {
        this.applications = await response.json();
      }
    },
    async setSkills() {
      const response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/skills"
      );
      if (response.ok) {
        let skills = {};
        const data = await response.json();
        await data.forEach((element) => {
          skills[element.id] = element;
        });
        this.skills = skills;
      }
      // const skills = await response.json();
    },
  },
  beforeCreate() {
    this.$store.dispatch("setApplications");
  },
  created() {
    this.setSkills();
    this.setApplications();
  },
};
</script>

<style scoped>
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 70px;
  display: flex;
  align-items: center;
  letter-spacing: 0.11em;
}
</style>
