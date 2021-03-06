<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle title="New Article"></PageTitle>
      <form id="newform" @submit.prevent="save()">
        <div class="lg:grid xl:grid grid-cols-12">
          <div class="col-span-8 mr-6">
            <div>
              <input
                v-model="article.title"
                type="text"
                name="title"
                class="px-4 py-2 w-64 m-2 w-full border border-bg-gray-100 text-black"
                placeholder="Title"
                required
              />
            </div>
            <div class="my-4">
              <vue-editor v-model="article.content"></vue-editor>
              <input type="hidden" name="content" v-model="article.content" />
            </div>
          </div>
          <div class="col-span-4">
            <div class="mb-3">
              <div
                class="flex w-full items-center justify-center bg-grey-lighter"
              >
                <label
                  class="w-64 flex flex-col mx-2 items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                  </svg>
                  <span class="mt-2 text-base leading-normal"
                    >Select an image</span
                  >
                  <input
                    type="file"
                    class="hidden"
                    name="image"
                    @change="getImage"
                  />
                </label>
              </div>
            </div>
            <div class="flex justify-center mt-6">
              <img :src="image" class="w-32 rounded-lg" />
            </div>

            <div class="mt-2 flex justify-center">
              <button
                v-show="record.image"
                @click="removeImage"
                type="button"
                class="mx-2 my-2 bg-red-600 text-white py-2 px-4 rounded-md text-xs"
              >
                Remove image
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            :disabled="sending"
            class="bg-blue-700 px-12 py-4 rounded-full text-white hover:bg-blue-900"
          >
            Save Article
          </button>
        </div>
      </form>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/Dashboard";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import RequestService from "../../services/RequestService";
import { VueEditor } from "vue2-editor";

export default {
  name: "Article",
  components: {
    DashboardLayout,
    PageTitle,
    VueEditor,
    Navbar,
  },
  data() {
    return {
      record: {
        title: "",
        content: "",
        image: "",
      },
      article: {},
      sending: false,
    };
  },
  computed: {
    image() {
      let articleImage = `${this.$config.api.articles_image_path}/${this.article.image}`;
      return this.record.image ? this.record.image : articleImage;
    },
  },
  methods: {
    async save() {
      this.sending = true;
      NProgress.start();

      const request = new RequestService();
      const form = document.querySelector("#newform");
      const payload = new FormData(form);
      payload.append("_method", "put");

      const response = await request.post(
        `${this.$config.api.url}/posts/${this.article.id}/update`,
        payload
      );

      NProgress.done();
      this.sending = false;

      if (!response.status) {
        return this.$toast.warning(response.message);
      }

      this.$toast.success(response.message);
      return this.$router.push({ name: "Article" });
    },

    async getImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.record.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.record.image = "";
    },
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

    this.article = response.data;
  },
};
</script>

<style>
</style>