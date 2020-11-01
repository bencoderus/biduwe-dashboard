<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle title="Dashboard"></PageTitle>
      <DashboardMenu />
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "../layouts/Dashboard";
import Navbar from "../components/Navbar";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import PageTitle from "../components/PageTitle";
import RequestService from "../services/RequestService";

export default {
  name: "About",
  components: {
    DashboardLayout,
    DashboardMenu,
    Navbar,
    PageTitle,
  },
  async mounted() {
    const request = new RequestService();
    await request.get(this.$config.api.url + "/auth/verify-user");
  },
};
</script>