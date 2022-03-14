<template>
  <div>
    <p class="question">{{ question }}</p>
    <div class="input-div flex justify-between items-center pl-16 pr-8 my-8">
      <p class="font-rb-montserat-reg input-p">{{ date }}</p>
      <img src="../../assets/images/calendar.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    date: String,
  },
};
</script>

<style scoped>
.input-div {
  width: 349px;
  height: 54px;

  background: #fffcfc;
  /* Primary Stroke */

  border: 1px solid #525557;
  box-sizing: border-box;
}
.input-p {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #454545;
}
.question {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
</style>
