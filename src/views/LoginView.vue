<template>

  <form @submit.prevent="userStore.login">
    <div class="login-box">
      <div class="form-input">
        <label for="username"> Username: </label>
        <input type="text" id="username" v-model="userStore.username" />
      </div>
      <div class="form-input">
        <label for="password"> Password: </label>
        <input type="password" id="password" v-model="userStore.password" />
      </div>
      <button type="submit" class="submit-button">Login</button>
    </div>
  </form>

</template>

<script setup>
import { useUserStore } from "../stores/User";

const userStore = useUserStore();
</script>

<style>
.login-box {
  max-width: fit-content;
  height: 60%;
  border: 2px;
  margin: auto;
  margin-top: 15%;
  margin-left: 30%;
  padding: 20px;
  border-radius: 8px;
  background-color: green;
  display: flex;
  flex-direction: column;
}

.form-input {
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 80%;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.form-input input {
  height: 20px;
}

.submit-button:hover {
  background-color: rgb(248, 201, 113) !important;
  cursor: pointer;
  color: black;

}

.submit-button {
  width: 60px;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  background-color: antiquewhite;
  border: none;
  border-radius: 5px;
  color: green;
}



.login-box label {
  color: antiquewhite;
  font-size: 14px;

}
</style>
