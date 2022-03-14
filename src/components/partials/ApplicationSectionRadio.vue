<template>
  <div class="py-5">
    <p class="question">{{ question }}</p>
    <div
      class="flex my-8"
      v-for="(option, index) in answerOptions"
      :key="index"
    >
      <div class="flex items-center mx-2">
        <span v-if="answer == option.value"
          ><img src="../../assets/images/button.png"
        /></span>
        <span v-else><img src="../../assets/images/radio-button.png" /></span>
      </div>
      <p>{{ option.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    answer: [Boolean, String],
    answerOptions: Array, // [{title, value}]
  },
};
</script>

<style scoped>
.question {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
</style>
