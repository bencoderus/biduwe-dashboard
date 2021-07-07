<template>
  <div>
    <div class="my-2">
      <span class="page-title">{{ title }}</span>
      <span class="float-right" v-show="routeName">
        <router-link :to="{ name: routeName }">
          <span
            class="bg-blue-700 text-sm text-white px-6 py-3 hover:bg-blue-500"
          >
            {{ routeTitle }}</span
          >
        </router-link>
      </span>
    </div>
    <hr />
    <br />
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["title", "routeTitle", "routeName"],
};
</script>

<style>
</style>