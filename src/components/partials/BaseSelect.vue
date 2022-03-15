<template>
  <div class="mb-6">
    <div>
      <select
        class="font-rb-montserat-reg"
        :value="selectValue"
        @input="$emit('update:selectValue', $event.target.value)"
      >
        <option value="">Skills</option>
        <option
          v-for="(item, index) in selectData"
          :key="index"
          :value="item.id + '|' + item.title"
        >
          {{ item.title }}
        </option>
      </select>
    </div>

    <p
      class="font-rb-montserat-reg text-rb-red mt-2"
      v-if="selectError.length > 0"
    >
      <span>* </span>
      {{ selectError }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    selectData: { type: [Array, Object], required: true },
    selectError: { type: [String, Boolean], required: false },
    selectValue: String,
  },
  emits: ["update:inputValue"],
};
</script>

<style scoped>
select {
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
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("../../assets/images/Vector.png");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
p {
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-left: 60px;
}
</style>
