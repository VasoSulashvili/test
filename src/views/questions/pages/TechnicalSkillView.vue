<template>
  <BaseLayout
    previous-view="personalInfo"
    next-view="covid"
    :view-error="viewError"
  >
    <!-- Left Side -->
    <!-- Header -->
    <template v-slot:left-side-header>
      <SectionHeader section-header="Tell us about your skills" />
    </template>
    <!-- END::Header -->
    <!-- Body -->
    <template v-slot:left-side-body>
      <div class="mx-auto flex flex-col items-center"></div>
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
export default {
  components: {
    BaseLayout,
    SectionHeader,
    BaseInput,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,

      errors: {
        firstName: "required",
        lastName: "required",
        email: "required",
        phone: false,
      },
      viewError: false,
    };
  },
  watch: {
    firstName(newData, oldData) {
      const data = String(newData);
      if (data.length < 2) {
        this.errors.firstName = "First Name must contain at least 2 characters";
      } else {
        this.errors.firstName = false;
      }
      this.updateViewError();
    },
    lastName(newData, oldData) {
      const data = String(newData);
      if (data.length < 2) {
        this.errors.lastName = "Last Name must contain at least 2 characters";
      } else {
        this.errors.lastName = false;
      }
      this.updateViewError();
    },
    email(newData, oldData) {
      let data = String(newData)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!data) {
        this.errors.email = "Email addres must be valid email format";
      } else {
        this.errors.email = false;
      }
      this.updateViewError();
    },
    phone(newData, oldData) {
      if (newData.length > 0) {
        this.errors.phone =
          "Mobile number must be valid georgian mobile format";
      } else {
        this.errors.phone = false;
      }
      this.updateViewError();
    },
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
  },
  created() {
    this.updateViewError();
  },
};
</script>

<style></style>
