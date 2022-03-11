<template>
  <div class="my-2 flex justify-between items-center px-4">
    <span class="w-40">{{ title }}</span>
    <span class="w-full px-4">Years of Experience: {{ experience }}</span>
    <button
      class="w-8"
      @click="
        $emit('removeSkill', { id: id, title: title, experience: experience })
      "
    >
      <img src="../../assets/images/Remove.png" alt="" srcset="" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    experience: Number,
  },
  emits: ["removeSkill"],
};
</script>

<style scoped>
div {
  width: 455px;
  height: 54px;

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
</style>
