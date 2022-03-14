<template>
  <div class="mb-10 w-full">
    <label class="block font-rb-montserat-reg text-black mb-6">{{
      textAreaLabel
    }}</label>

    <div class="">
      <textarea
        class="font-rb-montserat-reg"
        :placeholder="textAreaPlaceholder"
        :value="textAreaValue"
        @input="$emit('update:textAreaValue', $event.target.value)"
      ></textarea>
    </div>
    <p
      class="font-rb-montserat-reg text-rb-red my-1"
      v-if="inputError !== null && inputError.length > 0 && inputError !== '*'"
    >
      <span>* </span>
      {{ inputError }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    textAreaLabel: String,
    inputError: { type: [String, Boolean], required: false },
    textAreaPlaceholder: String,
    textAreaValue: String,
  },
  emits: ["update:textAreaValue"],
};
</script>

<style scoped>
textarea {
  width: 535px;
  height: 122px;
  padding: 20px 40px;

  background: #ffffff;
  /* Primary Stroke */

  border: 1px solid #525557;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #454545;
}
label {
  width: 645px;
  /* height: 52px; */

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
