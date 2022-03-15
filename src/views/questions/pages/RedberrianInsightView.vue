<template>
  <BaseLayout
    :view-error="viewError"
    @call-validator="callValidators()"
    @set-data-to-store="setDataToStore()"
  >
    <!-- Left Side -->
    <!-- Header -->
    <template v-slot:left-side-header>
      <SectionHeader section-header="What about you?" />
    </template>
    <!-- END::Header -->
    <!-- Body -->
    <template v-slot:left-side-body>
      <div class="mx-auto flex flex-col items-center">
        <!-- Dev Talk -->
        <QuestionAnswer>
          <template #question-text>
            Would you attend Devtalks and maybe also organize your own?
            <BaseError :error-message="errors.will_organize_devtalk" />
          </template>

          <template #question-option>
            <BaseRadio
              radio-name="will_organize_devtalk"
              v-model:radioValue="will_organize_devtalk"
              radio-value="true"
              radio-label="Yes"
              :model-value="will_organize_devtalk"
            />
            <BaseRadio
              radio-name="will_organize_devtalk"
              v-model:radioValue="will_organize_devtalk"
              radio-value="false"
              radio-label="No"
              :model-value="will_organize_devtalk"
            />
          </template>
        </QuestionAnswer>
        <!-- Topic -->
        <BaseTextArea
          v-if="will_organize_devtalk == 'true'"
          text-area-label="What would you speak about at Devtalk?"
          :input-error="errors.devtalk_topic"
          v-model:textAreaValue="devtalk_topic"
        />
        <!-- END::Topic -->
        <!-- END::Dev Talk -->
        <!-- Something Special -->
        <BaseTextArea
          text-area-label="Tell us something special"
          v-model:textAreaValue="something_special"
          :input-error="errors.something_special"
        />
        <!-- END::Something Special -->
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Left Side -->

    <!-- Right Side -->
    <!-- Header -->
    <template v-slot:right-side-header
      ><SectionHeader section-header="Redberrian Insights" />
      <!-- END::Header -->
    </template>
    <!-- Body -->
    <template v-slot:right-side-body>
      <div>
        We were soo much fun before the pandemic started! Parties almost every
        weekend and lavish employee birthday celebrations! Unfortunately, covid
        ruined that fun like it did almost everything else in the world. But we
        try our best to zhuzh it up a bit. For example, we host biweekly
        Devtalks where our senior and lead developers talk about topics they are
        passionate about. Previous topics have included Web3, NFT, Laravel 9,
        Kubernetes, etc. We hold these talks in the office but you can join our
        Zoom broadcast as well. Feel free to join either as an attendee or a
        speaker!
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Right Side -->
  </BaseLayout>
</template>

<script>
import BaseLayout from "../../../components/layouts/BaseLayout.vue";
import SectionHeader from "../../../components/partials/SectionHeader.vue";
import BaseRadio from "../../../components/partials/BaseRadio.vue";
import QuestionAnswer from "../../../components/sections/QuestionAnswer.vue";
import BaseTextArea from "../../../components/partials/BaseTextArea.vue";
import BaseError from "../../../components/partials/BaseError.vue";
export default {
  components: {
    BaseLayout,
    SectionHeader,
    BaseRadio,
    QuestionAnswer,
    BaseTextArea,
    BaseError,
  },
  data() {
    return {
      will_organize_devtalk: null,
      devtalk_topic: null,
      something_special: null,

      errors: {
        will_organize_devtalk: "*",
        devtalk_topic: false,
        something_special: "*",
      },
      viewError: true,
    };
  },
  watch: {
    will_organize_devtalk(newData, oldData) {
      this.validatorWillOrginizeDevtalk();
    },
    devtalk_topic(newData, oldData) {
      this.validatorDevtalkTopic();
    },
    something_special(newData, oldData) {
      this.validatorSomethingSpecial();
    },
  },
  methods: {
    // Set Data To Store
    setDataToStore() {
      const data = {
        will_organize_devtalk: this.will_organize_devtalk,
        devtalk_topic: this.devtalk_topic,
        something_special: this.something_special,
      };
      this.$store.commit("setRedberrianInsight", data);
    },
    // Setting Component Data From Store
    setStoreDataToComponent() {
      this.will_organize_devtalk = this.$store.state.data.will_organize_devtalk;
      this.devtalk_topic = this.$store.state.data.devtalk_topic;
      this.something_special = this.$store.state.data.something_special;
    },
    // Errors
    updateViewError() {
      const errors = Object.values(this.errors);
      const error = new Set(errors);
      if (error.size > 1 || error.has(null) || error.has("*")) {
        this.viewError = true;
      } else {
        this.viewError = false;
      }
    },
    // Validators
    callValidators() {
      //   alert();
      this.validatorWillOrginizeDevtalk();
      this.validatorDevtalkTopic();
      this.validatorSomethingSpecial();
      this.updateViewError();
    },
    validatorWillOrginizeDevtalk() {
      if (this.will_organize_devtalk === null) {
        this.errors.will_organize_devtalk =
          "Please choose if you will organize a devtolk";
      } else {
        if (this.will_organize_devtalk == "true") {
          this.errors.devtalk_topic = "*";
        } else {
          this.devtalk_topic = null;
          this.errors.devtalk_topic = false;
        }
        this.errors.will_organize_devtalk = false;
      }
      this.updateViewError();
    },

    validatorDevtalkTopic() {
      if (this.will_organize_devtalk == "true" && !this.devtalk_topic) {
        this.errors.devtalk_topic =
          "Please tell us what will you speak about at devtolk";
      } else {
        this.errors.devtalk_topic = false;
      }
      this.updateViewError();
    },
    validatorSomethingSpecial() {
      if (this.something_special === null) {
        this.errors.something_special = "Please tell us something...";
      } else {
        this.errors.something_special = false;
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
    this.updateViewError();
  },
  beforeUnmount() {
    // set component's data to store
    // const data = {
    //   will_organize_devtalk: this.will_organize_devtalk,
    //   devtalk_topic: this.devtalk_topic,
    //   something_special: this.something_special,
    // };
    // this.$store.commit("setRedberrianInsight", data);
  },
};
</script>

<style></style>
