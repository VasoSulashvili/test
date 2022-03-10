<template>
  <div class="mb-6">
    <div>
      <input
        class="font-rb-montserat-reg"
        :type="inputType"
        :placeholder="inputPlaceholder"
        :value="inputValue"
        @input="$emit('update:inputValue', $event.target.value)"
      />
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
    inputType: String,
    inputError: { type: [String, Boolean], required: false },
    inputPlaceholder: String,
    inputValue: String,
  },
  emits: ["update:inputValue"],
};
</script>

<style scoped>
input {
  width: 455px;
  height: 54px;
  padding-left: 60px;

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
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
