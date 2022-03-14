<template>
  <div>
    <p class="question my-8">{{ question }}</p>
    <div class="textarea-div p-5">
      <p class="font-rb-montserat-reg">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: [String, Boolean],
    text: [String, Boolean],
  },
};
</script>

<style scoped>
.textarea-div {
  width: 447px;
  height: 122px;
  border: 1px solid #525557;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3a3a3a;
  background: #ffffff;
  border: 1px solid #525557;
  box-sizing: border-box;
}
</style>
