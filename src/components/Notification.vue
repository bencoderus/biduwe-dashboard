<template>
  <div>
    <!-- An error message notification -->
    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
      v-show="type == 'warning'"
    >
      <p class="font-bold">Oops an error occured</p>
      <p>{{ message }}</p>
    </div>

    <!-- A success message notification -->
    <div
      class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
      role="alert"
      v-show="type == 'success'"
    >
      <p class="font-bold">Success</p>
      <p>{{ message }}</p>
    </div>

    <!-- A failed message notification -->
    <div
      class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      role="alert"
      v-show="type == 'error'"
    >
      <p class="font-bold">Failed</p>
      <p>{{ message }}</p>
    </div>

    <!-- An info message notification -->
    <div
      class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
      role="alert"
      v-show="type == 'info'"
    >
      <p class="font-bold">Info</p>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
  props: ["type", "message"],
};
</script>

<style>
</style>