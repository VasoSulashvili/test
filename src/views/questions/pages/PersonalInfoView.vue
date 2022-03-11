<template>
  <BaseLayout
    previous-view="welcome"
    next-view="technicalSkills"
    :view-error="viewError"
  >
    <!-- Left Side -->
    <!-- Header -->
    <template v-slot:left-side-header>
      <SectionHeader
        section-header="Hey, Rocketeer, what are your coordinates?"
      />
    </template>
    <!-- END::Header -->
    <!-- Body -->
    <template v-slot:left-side-body>
      <div class="mx-auto flex flex-col items-center">
        <BaseInput
          input-type="text"
          :input-error="errors.firstName"
          input-placeholder="First Name"
          v-model:inputValue="firstName"
        />
        <BaseInput
          input-type="text"
          :input-error="errors.lastName"
          input-placeholder="Last Name"
          v-model:inputValue="lastName"
        />
        <BaseInput
          input-type="email"
          :input-error="errors.email"
          input-placeholder="E Mail"
          v-model:inputValue="email"
        />
        <BaseInput
          input-type="text"
          :input-error="errors.phone"
          input-placeholder="+995 5__ __ __"
          v-model:inputValue="phone"
        />
      </div>
    </template>
    <!-- END::Body -->
    <!-- END::Left Side -->

    <!-- Right Side -->
    <!-- Header -->
    <template v-slot:right-side-header
      ><SectionHeader section-header="Redberry Origins" />
      <!-- END::Header -->
    </template>
    <!-- Body -->
    <template v-slot:right-side-body>
      <div>
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
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
    setStoreDataToComponent() {
      this.firstName = this.$store.state.data.first_name;
      this.lastName = this.$store.state.data.last_name;
      this.email = this.$store.state.data.email;
      this.phone = this.$store.state.data.phone;
    },
  },
  created() {
    this.updateViewError();
    this.setStoreDataToComponent();
  },
  beforeUnmount() {
    // set component's data to store
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
    };
    this.$store.commit("setPersonalInfo", data);
  },
};
</script>

<style></style>
