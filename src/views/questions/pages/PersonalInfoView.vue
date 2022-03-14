<template>
  <BaseLayout
    :view-error="viewError"
    @call-validator="callValidators()"
    @set-data-to-store="setDataToStore()"
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
          :input-error="errors.first_name"
          input-placeholder="First Name"
          v-model:inputValue="first_name"
        />
        <BaseInput
          input-type="text"
          :input-error="errors.last_name"
          input-placeholder="Last Name"
          v-model:inputValue="last_name"
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
      first_name: null,
      last_name: null,
      email: null,
      phone: null,

      errors: {
        first_name: "*",
        last_name: "*",
        email: "*",
        phone: false,
      },
      viewError: true,
    };
  },
  watch: {
    first_name(newData, oldData) {
      this.validatorFirstName();
    },
    last_name(newData, oldData) {
      this.validatorLastName();
    },
    email(newData, oldData) {
      this.validatorEmail();
    },
    phone(newData, oldData) {
      this.validatorPhone();
    },
  },
  methods: {
    // Set Data To Store
    setDataToStore() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
      };
      this.$store.commit("setPersonalInfo", data);
    },
    // Setting Component Data From Store
    setStoreDataToComponent() {
      this.first_name = this.$store.state.data.first_name;
      this.last_name = this.$store.state.data.last_name;
      this.email = this.$store.state.data.email;
      this.phone = this.$store.state.data.phone;
    },
    // Errors
    updateViewError() {
      const errors = Object.values(this.errors);
      const error = new Set(errors);
      if (error.size > 1 || error.has(null)) {
        this.viewError = true;
      } else {
        this.viewError = false;
      }
    },
    // Validators
    callValidators() {
      this.validatorFirstName();
      this.validatorLastName();
      this.validatorEmail();
      this.validatorPhone();
      this.updateViewError();
      this.setDataToStore();
    },
    validatorFirstName() {
      const data = this.first_name ? String(this.first_name) : null;
      if (data == null) {
        this.errors.first_name = "First Name is required";
      } else {
        if (data.length < 2) {
          this.errors.first_name =
            "First Name must contain at least 2 characters";
        } else {
          this.errors.first_name = false;
        }
      }
      this.updateViewError();
    },
    validatorLastName() {
      const data = this.last_name ? String(this.last_name) : null;
      if (data == null) {
        this.errors.last_name = "Last Name is required";
      } else {
        if (data.length < 2) {
          this.errors.last_name =
            "Last Name must contain at least 2 characters";
        } else {
          this.errors.last_name = false;
        }
      }

      this.updateViewError();
    },
    validatorEmail() {
      let data = this.email ? String(this.email) : null;
      if (data == null) {
        this.errors.email = "Email is required";
      } else {
        data
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if (!data) {
          this.errors.email = "Email addres must be valid email format";
        } else {
          this.errors.email = false;
        }
      }

      this.updateViewError();
    },
    validatorPhone() {
      if (this.phone) {
        if (this.phone.length > 0) {
          this.errors.phone =
            "Mobile number must be valid georgian mobile format";
        } else {
          this.errors.phone = false;
        }
      } else {
        this.errors.phone = false;
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
    //   first_name: this.first_name,
    //   last_name: this.last_name,
    //   email: this.email,
    //   phone: this.phone,
    // };
    // this.$store.commit("setPersonalInfo", data);
  },
};
</script>

<style></style>
