<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle :title="record.subject"></PageTitle>
      <div>
        <p>{{ record.message }}</p>
        <p class="mt-8 text-sm">
          <span class="font-semibold"> Sent By:</span>
          {{ record.name }}
          <span class="float-right" v-show="record.created_at">
            <span class="font-semibold"> Date received:</span>
            {{ record.created_at | formatDate }}
          </span>
        </p>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/Dashboard";
import Navbar from "../../components/Navbar";
import RequestService from "../../services/RequestService";
import PageTitle from "../../components/PageTitle";

export default {
  name: "MessageShow",
  components: {
    DashboardLayout,
    Navbar,
    PageTitle,
  },
  data() {
    return {
      record: {},
    };
  },
  async mounted() {
    NProgress.start();
    const request = new RequestService();
    const id = this.$route.params.id;
    const response = await request.get(
      `${this.$config.api.url}/messages/${id}`
    );

    NProgress.done();

    if (!response.status) {
      this.$toast.warning("Message not found");
      return this.$router.push({ name: "Message" });
    }

    this.record = response.data;
  },
};
</script>

<style>
</style>