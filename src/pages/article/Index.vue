<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle
        title="Articles"
        routeTitle="New Article"
        routeName="ArticleNew"
      >
      </PageTitle>
      <table class="table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="border px-4 py-2">#</th>
            <th class="border px-4 py-2">Title</th>
            <th class="border px-4 py-2">Views</th>
            <th class="border px-4 py-2">Author</th>
            <th class="border px-4 py-2">Added</th>
            <th class="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in records" :key="index">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">
              {{ article.title }}
              <span v-show="article.published === 1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-4 text-blue-600 inline"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </td>
            <td class="border px-4 py-2">{{ article.views }}</td>
            <td class="border px-4 py-2">{{ article.user.name }}</td>
            <td class="border px-4 py-2">
              {{ article.created_at | formatDate }}
            </td>
            <td class="border px-4 py-2">
              <router-link
                :to="{ name: 'ArticleShow', params: { slug: article.slug } }"
              >
                <span class="mr-2 mt-2 bg-blue-800 text-white px-3 py-2 text-xs"
                  >View</span
                >
              </router-link>

              <router-link
                :to="{ name: 'ArticleEdit', params: { slug: article.slug } }"
              >
                <span class="mr-2 mt-2 bg-blue-800 text-white px-3 py-2 text-xs"
                  >Edit</span
                >
              </router-link>

              <button
                @click="deleteRecord(article.id, index)"
                :disabled="sending"
                class="mr-2 mt-2 bg-red-600 text-white py-2 px-3 text-xs"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="my-5 flex justify-center" v-if="nextpage">
        <button
          type="button"
          @click="loadMore"
          class="bg-blue-700 text-sm px-5 py-3 text-white rounded-full"
        >
          Load more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline text-white w-4 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </button>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/Dashboard";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import RequestService from "../../services/RequestService";

export default {
  name: "Article",
  components: {
    DashboardLayout,
    PageTitle,
    Navbar,
  },
  data() {
    return {
      records: [],
      data: {},
      sending: false,
    };
  },
  computed: {
    nextpage() {
      const nextPage = this.data.current_page === this.data.last_page;
      return !nextPage ? this.data.next_page_url : null;
    },
  },
  methods: {
    async loadMore() {
      NProgress.start();
      const request = new RequestService();
      const response = await request.get(this.nextpage);

      NProgress.done();

      if (!response.status) {
        return this.$toast.error("Service unavailable");
      }

      this.records.push(...response.data.data);
      this.data = response.data;
    },
    async deleteRecord(id, index) {
      if (confirm("Are you sure you want to delete this record?")) {
        this.sending = true;
        NProgress.start();

        const request = new RequestService();
        const response = await request.delete(
          `${this.$config.api.url}/posts/${id}/delete`
        );

        NProgress.done();
        this.sending = false;

        if (!response.status) {
          return this.$toast.warning("Unable to delete record");
        }

        this.records.splice(index, 1);
        return this.$toast.success("Record delete successfully");
      }
    },
  },
  async mounted() {
    const request = new RequestService();
    const response = await request.get(this.$config.api.url + "/posts");

    if (!response.status) {
      return this.$toast.error("Service unavailable");
    }

    this.records = response.data.data;
    this.data = response.data;
  },
};
</script>

<style>
</style>