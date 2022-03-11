<template>
  <BaseLayout :view-error="viewError">
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
          :select-data="fakeSkills"
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
      fakeSkills: [
        {
          id: 1,
          experience: 3,
          title: "PHP",
        },
        {
          id: 2,
          experience: 1,
          title: "VUE",
        },
        {
          id: 3,
          experience: 4,
          title: "MYSQL",
        },
      ],
      // map to store
      skills: [],

      selectedData: null, //id|title
      experience: null,

      errors: {
        selectedData: false,
        experience: false,
        // email: "required",
        // phone: false,
      },
      viewError: false,
    };
  },
  watch: {
    // selectedData(newData, oldData) {
    //   const data = String(newData);
    //   if (data.length < 2) {
    //     this.errors.selectedData = "First Name must contain at least 2 characters";
    //   } else {
    //     this.errors.selectedData = false;
    //   }
    //   // this.updateViewError();
    // },
    id(newData, oldData) {
      // const data = String(newData);
      // if (data.length < 2) {
      //   this.errors.firstName = "First Name must contain at least 2 characters";
      // } else {
      //   this.errors.firstName = false;
      // }
      // this.updateViewError();
    },
    // lastName(newData, oldData) {
    //   const data = String(newData);
    //   if (data.length < 2) {
    //     this.errors.lastName = "Last Name must contain at least 2 characters";
    //   } else {
    //     this.errors.lastName = false;
    //   }
    //   this.updateViewError();
    // },
    // email(newData, oldData) {
    //   let data = String(newData)
    //     .toLowerCase()
    //     .match(
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     );
    //   if (!data) {
    //     this.errors.email = "Email addres must be valid email format";
    //   } else {
    //     this.errors.email = false;
    //   }
    //   this.updateViewError();
    // },
    // phone(newData, oldData) {
    //   if (newData.length > 0) {
    //     this.errors.phone =
    //       "Mobile number must be valid georgian mobile format";
    //   } else {
    //     this.errors.phone = false;
    //   }
    //   this.updateViewError();
    // },
  },
  methods: {
    updateViewError() {
      const errors = Object.values(this.errors);
      const error = new Set(errors);
      if (error.size > 1 || error.has("required")) {
        this.viewError = true;
      } else {
        this.viewError = false;
      }
    },
    setStoreDataToComponent() {
      const data = JSON.stringify(this.$store.state.data.skills);
      if (Object.keys(JSON.parse(data)).length === 0) {
        this.skills = [];
      } else {
        this.skills = JSON.parse(data);
      }
    },
    addSkill() {
      if (this.selectedData == null || this.selectedData.split("|")[0] == "") {
        this.errors.selectedData = "Please select a skill";
      } else {
        this.errors.selectedData = false;
      }
      if (!this.experience) {
        this.errors.experience = "Please fill experience duration in year";
      } else {
        this.errors.experience = false;
      }
      if (this.selectedData !== null && this.experience !== null) {
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
        } else {
          this.errors.selectedData =
            "This skill already exists, please select another one!";
        }

        if (this.skills.length > 0) {
          this.viewError = false;
        }
      }

      console.log(this.skills);
    },
    removeSkill(skill) {
      const a = JSON.stringify(this.skills);
      const b = JSON.parse(a);
      let updatedSkills = b.filter((item) => {
        return item.id != skill.id;
      });
      this.skills = updatedSkills;
    },
  },
  created() {
    this.updateViewError();
    this.setStoreDataToComponent();
    if (this.skills.length == 0) {
      this.viewError = true;
    }
  },
  beforeUnmount() {
    const data = this.skills;
    this.$store.commit("setTechnicalSkills", data);
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
