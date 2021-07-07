<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-sm mx-auto overflow-hidden rounded shadow-lg">
      <div class="px-6 py-4">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-24 text-blue-700 animate-bounce"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="font-bold text-xl flex justify-center">
          <br />
          <div>Page Not Found</div>
        </div>
      </div>
      <div class="p-8">
        <p>Sorry you seem lost, the page you are looking for does not exist.</p>
        <br /><br />
        <div class="my-7 flex justify-center">
          <a
            @click.prevent="$router.go(-1)"
            class="shadow-md rounded-full bg-blue-800 text-white py-4 px-10 hover:bg-blue-700"
            >Go back</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
</style>