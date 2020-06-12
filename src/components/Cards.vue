<template>
  <router-link class="event-link" :to="`${menu.link}`">
    <div class="event-card max-w-sm rounded overflow-hidden shadow-lg w-full lg:flex items-end">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
          <svg
            alt="Quasar logo"
            :src="`~/assets/illustrations/${menu.svg}.svg`"
          />
      </div>
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div class="flex-1 text-gray-900 font-bold text-right text-xl ">
            {{ menu.title }}
          </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    menu: Object
  }
}
</script>

<style>
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
