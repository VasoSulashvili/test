<template>
  <!-- 
  Attributes order, when calling this component 
  1 - v-model:radioValue
  2 - radio-value
  3 - ...
 -->
  <div class="mb-4 ml-2">
    <div>
      <label>
        <span
          ><input
            type="radio"
            :name="radioName"
            :checked="isChecked"
            :value="radioValue"
            @change="$emit('update:radioValue', $event.target.value)"
        /></span>
        <span class="ml-3 pb-1">{{ radioLabel }}</span></label
      >
    </div>

    <p
      class="font-rb-montserat-reg text-rb-red mt-2"
      v-if="inputError.length > 0"
    >
      <span>* </span>
      {{ inputError }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    inputError: { type: [String, Boolean], required: false },
    radioName: { type: String, required: true },
    radioValue: { type: String, required: true },
    radioLabel: { type: String, required: true },
    modelValue: { type: [String, Number, Boolean, null], required: true },
  },
  computed: {
    isChecked() {
      return this.modelValue == this.radioValue;
    },
  },
  emits: ["update:radioValue"],
};
</script>

<style scoped>
input {
  width: 14px;
  height: 14px;

  background: #ffffff;
  /* Primary Stroke */

  border: 1px solid #525557;
  box-sizing: border-box;

  color: #454545;
}

label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
