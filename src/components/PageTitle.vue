<template>
  <div>
    <div class="my-4">
      <span class="page-title">{{ title }}</span>
      <span class="float-right" v-show="callback">Hello world</span>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["title", "callback", "link-title", "link"],
};
</script>

<style>
</style>