<template>
  <BaseLayout
    :view-error="viewError"
    @call-validator="callValidators()"
    @set-data-to-store="setDataToStore()"
  >
    <!-- Left Side -->
    <!-- Header -->
    <template v-slot:left-side-header>
      <SectionHeader class="text-center" section-header="Covid Stuff" />
    </template>
    <!-- END::Header -->
    <!-- Body -->
    <template v-slot:left-side-body>
      <div class="mx-auto flex flex-col items-center">
        <!-- Work -->
        <QuestionAnswer>
          <template #question-text>
            how would you prefer to work?
            <BaseError :error-message="errors.work_preference" />
          </template>
          <template #question-option>
            <BaseRadio
              radio-name="work_preference"
              v-model:radioValue="work_preference"
              radio-value="from_office"
              radio-label="From Sairme Office"
              :model-value="work_preference"
            />
            <BaseRadio
              radio-name="work_preference"
              v-model:radioValue="work_preference"
              radio-value="from_home"
              radio-label="From Home"
              :model-value="work_preference"
            />
            <BaseRadio
              radio-name="work_preference"
              v-model:radioValue="work_preference"
              radio-value="hybrid"
              radio-label="Hybrid"
              :model-value="work_preference"
            />
          </template>
        </QuestionAnswer>
        <!-- END::Work -->
        <!-- Covid -->
        <QuestionAnswer>
          <template #question-text>
            Did you contact covid 19? :(
            <BaseError :error-message="errors.had_covid" />
          </template>
          <template #question-option>
            <BaseRadio
              radio-name="had_covid"
              v-model:radioValue="had_covid"
              radio-value="true"
              radio-label="Yes"
              :model-value="had_covid"
            />
            <BaseRadio
              radio-name="had_covid"
              v-model:radioValue="had_covid"
              radio-value="false"
              radio-label="No"
              :model-value="had_covid"
            />
          </template>
        </QuestionAnswer>
        <QuestionAnswer>
          <template #question-text> When? </template>
          <template #question-option>
            <BaseDateInput
              :max-date="hadCovidAtMaxDate"
              :input-placeholder="had_covid_at ? had_covid_at : 'Date'"
              v-model:inputValue="had_covid_at"
              :input-error="errors.had_covid_at"
              :is-active="had_covid"
            />
          </template>
        </QuestionAnswer>
        <!-- END::Covid -->
        <!-- Vactinated -->
        <QuestionAnswer>
          <template #question-text>
            Have you been vaccinated?
            <BaseError :error-message="errors.vaccinated" />
          </template>

          <template #question-option>
            <BaseRadio
              radio-name="vaccinated"
              v-model:radioValue="vaccinated"
              radio-value="true"
              radio-label="Yes"
              :model-value="vaccinated"
            />
            <BaseRadio
              radio-name="vaccinated"
              v-model:radioValue="vaccinated"
              radio-value="false"
              radio-label="No"
              :model-value="vaccinated"
            />
          </template>
        </QuestionAnswer>
        <QuestionAnswer>
          <template #question-text>When?</template>
          <template #question-option>
            <BaseDateInput
              :max-date="hadCovidAtMaxDate"
              :input-placeholder="vaccinated_at ? vaccinated_at : 'Date'"
              v-model:inputValue="vaccinated_at"
              :input-error="errors.vaccinated_at"
              :is-active="vaccinated"
            />
          </template>
        </QuestionAnswer>
        <!-- END::Vactinated -->
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Left Side -->

    <!-- Right Side -->
    <!-- Header -->
    <template v-slot:right-side-header
      ><SectionHeader section-header="Redberry Covid Policies" />
      <!-- END::Header -->
    </template>
    <!-- Body -->
    <template v-slot:right-side-body>
      <div>
        As this infamous pandemic took over the world, we adjusted our working
        practices so that our employees can be as safe and comfortable as
        possible. We have a hybrid work environment, so you can either work from
        home or visit our lovely office on Sairme Street. If it was up to us, we
        would love you to see us in the office because we think face-to-face
        communications > Zoom meetings. Both on the fun and productivity scales.
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Right Side -->
  </BaseLayout>
</template>

<script>
import BaseError from "../../../components/partials/BaseError.vue";
import SectionHeader from "../../../components/partials/SectionHeader.vue";
import BaseRadio from "../../../components/partials/BaseRadio.vue";
import QuestionAnswer from "../../../components/sections/QuestionAnswer.vue";
import BaseDateInput from "../../../components/partials/BaseDateInput.vue";

export default {
  components: {
    SectionHeader,
    BaseRadio,
    QuestionAnswer,
    BaseDateInput,
    BaseError,
  },
  data() {
    return {
      work_preference: null, // from_home from_office hybrid

      had_covid: null, // boolean
      had_covid_at: null, // 2022-02-23

      vaccinated: null, // boolean
      vaccinated_at: null, // 2022-02-23

      errors: {
        work_preference: "*",
        had_covid: "*",
        had_covid_at: false,
        vaccinated: "*",
        vaccinated_at: false,
      },
      viewError: false,
    };
  },
  computed: {
    hadCovidAtMaxDate() {
      const now = new Date();
      return (
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
      );
    },
  },
  watch: {
    work_preference(newData, oldData) {
      this.validatorWorkPreference();
    },
    had_covid(newData, oldData) {
      if (newData) {
        this.had_covid_at = null;
      }
      this.validatorHadCovid();
      this.validatorHadCovidAt();
    },
    vaccinated(newData, oldData) {
      if (newData) {
        this.vaccinated_at = null;
      }
      this.validatorVaccinated();
      this.validatorVaccinatedAt();
    },
    had_covid_at(newData, oldData) {
      this.validatorHadCovidAt();
    },
    vaccinated_at(newData, oldData) {
      this.validatorVaccinatedAt();
    },
  },
  methods: {
    // Set Data To Store
    setDataToStore() {
      const data = {
        work_preference: this.work_preference,
        had_covid: this.had_covid,
        had_covid_at: this.had_covid_at,
        vaccinated: this.vaccinated,
        vaccinated_at: this.vaccinated_at,
      };
      this.$store.commit("setCovid", data);
    },
    // Setting Component Data From Store
    setStoreDataToComponent() {
      this.work_preference = this.$store.state.data.work_preference;
      this.had_covid = this.$store.state.data.had_covid;
      this.had_covid_at = this.$store.state.data.had_covid_at;
      this.vaccinated = this.$store.state.data.vaccinated;
      this.vaccinated_at = this.$store.state.data.vaccinated_at;
    },
    // Errors
    updateViewError() {
      const errors = Object.values(this.errors);
      const error = new Set(errors);
      if (error.size > 1 || error.has("*")) {
        this.viewError = true;
      } else {
        this.viewError = false;
      }
    },
    // Validators
    callValidators() {
      this.validatorWorkPreference();
      this.validatorHadCovid();
      this.validatorVaccinated();
      this.validatorHadCovidAt();
      this.validatorVaccinatedAt();
      this.updateViewError();
    },
    validatorWorkPreference() {
      if (
        ["from_home", "from_office", "hybrid"].indexOf(this.work_preference) ==
        -1
      ) {
        this.errors.work_preference = "Please choose your work space";
      } else {
        this.errors.work_preference = false;
      }
      this.updateViewError();
    },
    validatorHadCovid() {
      if (this.had_covid === null) {
        this.errors.had_covid = "Please choose if you had covid or not";
      } else {
        this.errors.had_covid = false;
      }
      this.updateViewError();
    },
    validatorVaccinated() {
      if (this.vaccinated === null) {
        this.errors.vaccinated = "Please choose if you are vaccinated or not";
      } else {
        this.errors.vaccinated = false;
      }
      this.updateViewError();
    },
    validatorHadCovidAt() {
      if (this.had_covid_at) {
        const now = new Date();
        const date = new Date(this.had_covid_at);
        if (date.getTime() > now.getTime()) {
          this.errors.had_covid_at = "Illness period cannot be future date";
        } else {
          this.errors.had_covid_at = false;
        }
        this.updateViewError();
      }
      if (
        this.had_covid &&
        this.had_covid !== "false" &&
        this.had_covid != "required" &&
        !this.had_covid_at
      ) {
        this.errors.had_covid_at = "Illness period is required";
      }
      this.updateViewError();
    },
    validatorVaccinatedAt() {
      if (this.vaccinated_at) {
        const now = new Date();
        const date = new Date(this.vaccinated_at);
        if (date.getTime() > now.getTime()) {
          this.errors.vaccinated_at = "Vaccinated date cannot be future date";
        } else {
          this.errors.vaccinated_at = false;
        }
      }
      if (
        this.vaccinated &&
        this.vaccinated !== "false" &&
        this.vaccinated != "required" &&
        !this.vaccinated_at
      ) {
        this.errors.vaccinated_at = "Vaccinated date is required";
      }
      this.updateViewError();
    },
  },
  created() {
    this.setStoreDataToComponent();
    const errors = Object.values(this.errors);
    const error = new Set(errors);
    if (error.has("*")) {
      this.viewError = true;
    } else {
      this.callValidators();
    }
    // this.callValidators();
    this.updateViewError();
  },
  beforeUnmount() {
    // const data = {
    //   work_preference: this.work_preference,
    //   had_covid: this.had_covid,
    //   had_covid_at: this.had_covid_at,
    //   vaccinated: this.vaccinated,
    //   vaccinated_at: this.vaccinated_at,
    // };
    // this.$store.commit("setCovid", data);
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
