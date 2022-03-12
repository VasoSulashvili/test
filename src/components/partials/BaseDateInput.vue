<template>
  <div class="mb-6">
    <div class="datapicker-wraper flex justify-between items-center pr-4">
      <span class="font-rb-montserat-reg">{{
        inputValue ? inputValue : inputPlaceholder
      }}</span>
      <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>

        <input
          v-if="isActive == 'true'"
          type="date"
          class="datepicker-input"
          :min="minDate"
          :max="maxDate"
          :placeholder="inputPlaceholder"
          :value="inputValue"
          @input="$emit('update:inputValue', $event.target.value)"
        />
      </span>
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
    isActive: { tyep: Boolean, required: false, default: true },
    inputError: { type: [String, Boolean], required: false },
    minDate: { type: Date, required: false },
    maxDate: { type: Date, required: false },
    inputPlaceholder: String,
    inputValue: String,
  },

  emits: ["update:inputValue"],
};
</script>

<style scoped>
.datapicker-wraper {
  width: 455px;
  height: 54px;
  padding-left: 60px;
  background: #ffffff;
  border: 1px solid #525557;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #454545;
}
.datepicker-toggle {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 19px;
}
.datepicker-toggle-button {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/calendar.png");
}
.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
