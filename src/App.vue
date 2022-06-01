<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();
const showText = ref("show");
const show = ref(true);
const triggershow = () => {
  show.value = !show.value;

};
</script>

<template>
  <header>
    <Transition name="side">
      <div class="sideNav" v-if="userStore.isAuthinticated" v-show="show">
        <img src="@/assets/pharcoVueLogo3.png" alt="Logo" srcset="" class="site-logo">
        <RouterLink to="/" class="navitem">Home</RouterLink>
      </div>
    </Transition>
    <Transition name="top">
      <div class="topNav" v-if="userStore.isAuthinticated">
        <h1 class="title">Test Vue App</h1>
        <a @click.prevent="userStore.logout" class="navitem"> logout </a>
        <a @click.prevent="triggershow" class="navitem"> {{ !show ? "show" : "hide" }} </a>
      </div>
    </Transition>
  </header>

  <RouterView class="main" />
</template>

<style>
:root {
  --top-nav-Maxheight: max-content;
  --top-nav-height: 50px;
}

.m-5 {
  margin: 10px;
}

.site-logo {

  overflow: hidden;
  width: 100%;
  height: 180px;
  margin: 5px;
}

.topNav {
  background-color: green;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 0%;
  width: auto;
  height: var(--top-nav-height);
  max-height: var(--top-nav-Maxheight);
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}

.content-between {
  justify-content: space-between;
}

.p-5 {
  padding: 10px;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.transition-5 {
  transition: all 0.5s ease;
}

.sideNav {
  background-color: green;
  position: absolute;
  top: var(--top-nav-height);
  left: 0%;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hide {
  display: none;
}

.main {
  max-width: 100%;
  margin: auto;
  margin-left: 15%;
  margin-top: var(--top-nav-height);
  height: 100%;
}

.sideNav .navitem {
  color: white;
  text-decoration: none;
  width: auto;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 2px;
  transition: 0.5s ease;
  right: 0;
}

.sideNav .navitem:hover {
  background-color: rgb(5, 100, 5);
  color: wheat;
}

.topNav .title {
  font-size: large;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding: 5px;
  margin: auto;
  height: 25px;
  margin-left: 10px;
  margin-top: 10px;
  align-self: flex-start;
  justify-self: flex-start;
}

.topNav .title:hover {
  cursor: pointer;
  color: wheat;
}

.topNav .navitem {
  text-decoration: none;
  cursor: pointer;
  margin: 4px;
  padding: 4px;
  height: 25px;
  color: white;
  place-self: flex-end, flex-end;
}

.topNav .navitem:hover {
  color: wheat;
}

.router-link-exact-active {
  color: wheat !important;
  background-color: rgb(5, 100, 5);
}

.side-enter-active,
.side-leave-active {
  transition: width 0.5s ease;
}

.side-enter-from,
.side-leave-to {
  width: 0;
}

.top-enter-active,
.top-leave-active {
  transition: height 0.5s ease;
}

.top-enter-from,
.top-leave-to {
  height: 0;
}
</style>
