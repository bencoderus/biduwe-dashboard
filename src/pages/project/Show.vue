<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle
        :title="record.title"
        routeName="Project"
        routeTitle="Go back"
      ></PageTitle>
      <div>
        <p class="mb-4 flex justify-center">
          <img
            :src="`${$config.api.projects_image_path}/${record.preview}`"
            alt="Image"
          />
        </p>

        <p v-html="record.content"></p>

        <div class="mt-4 grid grid-cols-12">
          <div
            class="col-span-2"
            v-for="(image, index) in record.images"
            :key="index"
          >
            <div class="my-4 mx-2">
              <img
                :src="`${$config.api.projects_image_path}/${image.title}`"
                alt="Prevew"
              />
            </div>
          </div>
        </div>

        <p class="my-8 text-sm">
          <span class="font-semibold"> Tools:</span>
          {{ record.tools }}
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
  name: "ProjectShow",
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
    const slug = this.$route.params.slug;
    const response = await request.get(
      `${this.$config.api.url}/projects/${slug}`
    );

    NProgress.done();

    if (!response.status) {
      this.$toast.warning("Project not found");
      return this.$router.push({ name: "Project" });
    }

    this.record = response.data;
  },
};
</script>

<style>
</style>