<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle title="Messages"></PageTitle>

      <table class="table-auto">
        <thead>
          <tr class="bg-gray-100">
            <th class="border px-4 py-2">#</th>
            <th class="border px-4 py-2">Subject</th>
            <th class="border px-4 py-2">Author</th>
            <th class="border px-4 py-2">Date Sent</th>
            <th class="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(message, index) in records" :key="index">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ message.subject }}</td>
            <td class="border px-4 py-2">{{ message.name }}</td>
            <td class="border px-4 py-2">
              {{ message.created_at | formatDate }}
            </td>
            <td class="border px-4 py-2">
              <router-link
                :to="{ name: 'MessageShow', params: { id: message.id } }"
              >
                <span
                  class="m-2 bg-blue-800 text-white px-4 py-2 rounded-md text-xs"
                  >View</span
                >
              </router-link>
              <button
                @click="deleteRecord(message.id, index)"
                :disabled="sending"
                class="m-2 bg-red-600 text-white py-2 px-4 rounded-md text-xs"
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
  name: "Message",
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
          `${this.$config.api.url}/messages/${id}/delete`
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
    const response = await request.get(this.$config.api.url + "/messages/all");

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