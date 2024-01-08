<script>
export default {
  props: ["singleProjectHeader"],
};
</script>

<template>

  <div>

    <!-- Project heading and meta info -->
    <p
      v-if="singleProjectHeader && singleProjectHeader.singleProjectTitle"
      class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
    >
      {{ singleProjectHeader.singleProjectTitle }}
    </p>

    <div v-if="singleProjectHeader" class="flex">

      <div
        v-if="singleProjectHeader.singleProjectDate"
        class="flex items-center mr-10"
      >
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
        >
          {{ singleProjectHeader.singleProjectDate }}
        </span>
      </div>

      <div
        v-if="singleProjectHeader.singleProjectTag"
        class="flex items-center"
      >
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
        >
          {{ singleProjectHeader.singleProjectTag }}
        </span>
      </div>
    </div>

  </div>

</template>
