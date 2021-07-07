<template>
  <div>
    <Navbar />
    <DashboardLayout>
      <PageTitle
        :title="`Edit ${project.title}`"
        routeName="Project"
        routeTitle="Go back"
      ></PageTitle>
      <form id="newform" @submit.prevent="save()">
        <div class="lg:grid xl:grid grid-cols-12">
          <div class="col-span-12 md:col-span-9">
            <div class="grid grid-cols-12">
              <div class="col-span-12 md:col-span-6">
                <input
                  v-model="project.title"
                  type="text"
                  name="title"
                  class="px-4 py-2 w-64 m-2 w-full border border-bg-gray-100 text-black"
                  placeholder="Title"
                  required
                />
              </div>
              <div class="col-span-12 md:col-span-6">
                <input
                  v-model="project.tools"
                  autocomplete="tools"
                  type="text"
                  name="tools"
                  class="px-4 py-2 w-64 m-2 w-full border border-bg-gray-100 text-black"
                  placeholder="Tools"
                  required
                />
              </div>
            </div>
            <div class="my-4">
              <vue-editor v-model="project.content"></vue-editor>
              <input type="hidden" name="content" v-model="project.content" />
            </div>

            <div class="my-4">
              <input
                v-model="project.link"
                autocomplete="tools"
                type="text"
                name="link"
                class="px-4 py-2 w-64 m-2 w-full border border-bg-gray-100 text-black"
                placeholder="Link"
                required
              />
            </div>
          </div>
          <div class="col-span-12 md:col-span-3">
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
                    >Choose preview</span
                  >
                  <input
                    type="file"
                    class="hidden"
                    name="preview"
                    @change="getImage"
                  />
                </label>
              </div>
            </div>
            <div class="flex justify-center mt-6" v-show="projectImage">
              <img :src="projectImage" class="w-64 rounded-lg" />
            </div>

            <div class="mt-2 flex justify-center">
              <button
                v-show="record.image"
                @click="removeImage"
                class="mx-2 my-2 bg-red-600 text-white py-2 px-4 rounded-md text-xs"
              >
                Remove image
              </button>
            </div>
          </div>
        </div>
        <p>Images</p>
        <hr />
        <div class="mt-4 grid grid-cols-12">
          <div
            class="col-span-6 md:col-span-2"
            v-for="(image, index) in project.images"
            :key="index"
          >
            <div class="my-4 mx-2">
              <img
                :src="`${$config.api.projects_image_path}/${image.title}`"
                alt="Prevew"
              />
              <p class="flex justify-center">
                <button
                  class="bg-red-700 my-4 text-white p-3 text-xs"
                  type="button"
                  :disabled="sending"
                  @click="removeProjectImage(index, image.id)"
                >
                  Remove
                </button>
              </p>
            </div>
          </div>
        </div>

        <p>Add Images</p>
        <hr />
        <div class="mt-4 grid grid-cols-12">
          <div
            class="col-span-6 md:col-span-2"
            v-for="(image, index) in images"
            :key="index"
          >
            <div class="mb-3">
              <div
                class="flex w-full items-center justify-center bg-grey-lighter"
              >
                <label
                  class="w-64 flex flex-col mx-2 items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="mt-2 text-base leading-normal">Choose</span>
                  <input type="file" class="hidden" name="images[]" />
                </label>
              </div>
              <div class="flex justify-center">
                <button
                  class="bg-red-700 my-4 text-white p-3 text-xs"
                  type="button"
                  @click="removeFileField(index)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2">
            <div class="mb-3">
              <div
                class="flex w-full items-center justify-center"
                @click="addFileField"
              >
                <label
                  class="w-64 flex flex-col mx-2 items-center px-4 py-6 bg-blue-700 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="mt-2 text-base leading-normal">New image</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center my-4">
          <button
            type="submit"
            :disabled="sending"
            class="bg-blue-700 px-12 py-4 rounded-full text-white hover:bg-blue-900"
          >
            Save Project
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
  name: "NewProject",
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
        tools: "",
      },
      project: {},
      images: [1],
      image: "",
      sending: false,
      project_images: [],
    };
  },
  computed: {
    projectImage() {
      let projectImage = `${this.$config.api.projects_image_path}/${this.project.preview}`;
      return this.image ? this.image : projectImage;
    },
  },
  methods: {
    async removeProjectImage(index, id) {
      NProgress.start();
      const request = new RequestService();
      this.sending = true;

      const response = await request.delete(
        `${this.$config.api.url}/projects/images/${id}/delete`
      );

      NProgress.done();
      this.sending = false;

      if (!response.status) {
        return this.$toast.warning("Image not found");
      }

      this.project.images.splice(index, 1);
    },

    async save() {
      NProgress.start();
      this.sending = true;

      const request = new RequestService();
      const form = document.querySelector("#newform");
      const payload = new FormData(form);
      payload.append("_method", "put");

      const response = await request.post(
        `${this.$config.api.url}/projects/${this.project.id}/update`,
        payload
      );

      NProgress.done();
      this.sending = false;

      if (!response.status) {
        return this.$toast.warning(response.message);
      }

      this.$toast.success(response.message);
      return this.$router.push({ name: "Project" });
    },
    async addFileField() {
      let last = this.images[0];
      this.images.push(++last);
    },
    async removeFileField(index) {
      if (index === 0) {
        return this.$toast.warning("You need atleast one image field");
      }

      this.images.splice(index, 1);
    },

    async getImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },

    removeImage() {
      this.image = "";
    },
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

    this.project = response.data;
  },
};
</script>

<style>
</style>