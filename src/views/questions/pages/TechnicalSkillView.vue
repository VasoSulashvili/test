<template>
  <BaseLayout
    :view-error="viewError"
    @call-validator="callValidators()"
    @set-data-to-store="setDataToStore()"
  >
    <!-- Left Side -->
    <!-- Header -->
    <template v-slot:left-side-header>
      <SectionHeader section-header="Tell us about your skills" />
    </template>
    <!-- END::Header -->
    <!-- Body -->
    <template v-slot:left-side-body>
      <div class="mx-auto flex flex-col items-center">
        <BaseSelect
          :select-data="$store.state.ui.skills"
          :select-error="errors.selectedData"
          v-model:selectValue="selectedData"
        />
        <BaseInput
          input-type="number"
          :input-error="errors.experience"
          input-placeholder="Experience Duration in Years"
          v-model:inputValue="experience"
        />
        <div id="add-skill-button-wraper" class="flex justify-end">
          <button
            class="font-rb-montserat-reg bg-rb-red text-white text-center"
            @click="addSkill"
          >
            Add Programming Language
          </button>
        </div>
      </div>
      <div class="mx-auto mt-20 flex flex-col items-center">
        <AddedSkill
          v-for="(item, index) in skills"
          :key="index"
          :id="item.id"
          :title="item.title"
          :experience="item.experience"
          @remove-skill="removeSkill"
        />
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Left Side -->

    <!-- Right Side -->
    <!-- Header -->
    <template v-slot:right-side-header
      ><SectionHeader section-header="A bit about our battles" />
      <!-- END::Header -->
    </template>
    <!-- Body -->
    <template v-slot:right-side-body>
      <div>
        As we said, Redberry has been on the field for quite some time now, and
        we have touched and embraced a variety of programming languages,
        technologies, philosophies, and frameworks. We are battle-tested in PHP
        Laravel Stack with Vue.js, refined in React, and allies with Serverside
        technologies like Docker and Kubernetes, and now we have set foot in the
        web3 industry.
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Right Side -->
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../../components/layouts/BaseLayout.vue";
import SectionHeader from "../../../components/partials/SectionHeader.vue";
import BaseInput from "../../../components/partials/BaseInput.vue";
import BaseSelect from "../../../components/partials/BaseSelect.vue";
import AddedSkill from "../../../components/sections/AddedSkill.vue";
import TestView from "../../TestView.vue";
export default {
  components: {
    BaseLayout,
    SectionHeader,
    BaseInput,
    BaseSelect,
    AddedSkill,
  },
  data() {
    return {
      // map to store
      skills: [],

      selectedData: null, //id|title
      experience: null,

      errors: {
        selectedData: true,
        experience: true,
      },
      viewError: false,
    };
  },
  watch: {
    skills(newData, oldData) {
      this.updateViewError();
    },
  },
  methods: {
    // Set Data To Store
    setDataToStore() {
      const data = this.skills;
      this.$store.commit("setTechnicalSkills", data);
    },
    // Setting Component Data From Store
    setStoreDataToComponent() {
      const data = JSON.stringify(this.$store.state.data.skills);
      if (Object.keys(JSON.parse(data)).length === 0) {
        this.skills = [];
      } else {
        this.skills = JSON.parse(data);
      }
    },
    // Errors
    updateViewError() {
      if (this.skills.length > 0) {
        this.viewError = false;
      } else {
        this.viewError = true;
      }
    },
    // Validators
    callValidators() {
      this.validatorSelectedData();
      this.validatorExperience();
    },
    validatorSelectedData() {
      if (this.selectedData == null || this.selectedData.split("|")[0] == "") {
        this.errors.selectedData = "Please select a skill";
      } else {
        this.errors.selectedData = false;
      }
    },
    validatorExperience() {
      if (!this.experience) {
        this.errors.experience = "Please fill experience duration in year";
      } else {
        this.errors.experience = false;
      }
    },

    // Other
    addSkill() {
      this.validatorSelectedData();
      this.validatorExperience();
      if (
        this.selectedData !== null &&
        this.experience !== null &&
        !this.errors.selectedData &&
        !this.errors.experience
      ) {
        const id = parseInt(this.selectedData.split("|")[0]);
        const title = this.selectedData.split("|")[1];
        const experience = parseInt(this.experience);
        const skillsIds = this.skills.map((item) => item.id);
        if (skillsIds.indexOf(id) == -1) {
          this.skills.push({
            id: id,
            title: title,
            experience: experience,
          });
          // reset data
          this.selectedData = null;
          this.experience = null;
          this.errors.selectedData = false;
          this.errors.experience = false;
        } else {
          this.errors.selectedData =
            "This skill already exists, please select another one!";
        }
        // Update viewError
        this.updateViewError();
      }
    },
    removeSkill(skill) {
      const a = JSON.stringify(this.skills);
      const b = JSON.parse(a);
      let updatedSkills = b.filter((item) => {
        return item.id != skill.id;
      });
      this.skills = updatedSkills;
      // Update viewError
      this.updateViewError();
    },
  },
  beforeCreate() {
    this.$store.dispatch("setSkills");
  },
  created() {
    this.setStoreDataToComponent();
    this.updateViewError();
  },
  beforeUnmount() {
    // const data = this.skills;
    // this.$store.commit("setTechnicalSkills", data);
  },
};
</script>

<style scoped>
button {
  width: 201px;
  height: 32px;
  background: #fe3b1f;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
#add-skill-button-wraper {
  width: 455px;
}
</style>
