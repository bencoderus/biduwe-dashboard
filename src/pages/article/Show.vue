<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle :title="record.title"></PageTitle>
      <div>
        <p class="mb-4 flex justify-center">
          <img
            :src="`${$config.api.articles_image_path}/${record.image}`"
            alt="Image"
          />
        </p>

        <p v-html="record.content"></p>

        <p class="mt-8 text-sm" v-show="record.user">
          <span class="font-semibold"> Sent By:</span>
          {{ record.user.name }}
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
  name: "ArticleShow",
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
    const response = await request.get(`${this.$config.api.url}/posts/${slug}`);

    NProgress.done();

    if (!response.status) {
      this.$toast.warning("Post not found");
      return this.$router.push({ name: "Article" });
    }

    this.record = response.data;
  },
};
</script>

<style>
</style>