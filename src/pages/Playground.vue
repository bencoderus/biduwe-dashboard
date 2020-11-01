<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <p>Hello world</p>
      <div class="bg-red-800 p-10"></div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "../layouts/Dashboard";
import Navbar from "../components/Navbar";

export default {
  name: "Playground",
  components: {
    DashboardLayout,
    Navbar,
  },
};
</script>

<style>
</style>