<template>
  <q-page class="flex flex-center">
    <div class="event-card max-w-sm rounded overflow-hidden shadow-lg w-full lg:flex items-end">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
          <img
            alt="Quasar logo"
            src="~assets/illustrations/undraw_Booked_j7rj.svg"
          >
      </div>
      <div class=" ]bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div class="flex-1 text-gray-900 font-bold text-right text-xl ">
            Agende a sua próxima visita!
          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
