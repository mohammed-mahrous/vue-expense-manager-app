<template>
  <div>
    <div class="page-header">
      <h1 class="page-title">expenses</h1>
      <button class="header-button">Add New</button>
    </div>
    <div class="container">

      <div class="expenses-card">
        <div class="card-title">
          <h4>
            My Expenses
          </h4>

          <span class="show-span" @click="ShowMyExpenses">
            <h4>
              {{ showExpense ? "hide" : "show" }}
            </h4>
          </span>
        </div>

        <table class="expenses-table" v-if="showExpense">
          <tr class="expenses-header">
            <th>id</th>
            <th>from</th>
            <th>to</th>
            <th>Action</th>
          </tr>
          <tr v-for="expense in expensesStore.expenses" :key="expense.id" class="expenses-row">
            <td>
              {{ expense.id }}
            </td>
            <td>
              {{ expense.from }}
            </td>
            <td>
              {{ expense.to }}
            </td>
            <td>
              Actions
            </td>
          </tr>
        </table>

      </div>
      <div class="expenses-card">
        <div class="card-title">
          <h4>
            Team Expenses
          </h4>

          <span class="show-span" @click="ShowTeamExpenses">
            <h4>
              {{ showTeam ? "hide" : "show" }}
            </h4>
          </span>
        </div>

        <table class="expenses-table" v-if="showTeam">
          <tr class="expenses-header">
            <th>id</th>
            <th>from</th>
            <th>to</th>
            <th>Action</th>
          </tr>
          <tr v-for="expense in teamExpensesStore.expenses" :key="expense.id" class="expenses-row">
            <td>
              {{ expense.id }}
            </td>
            <td>
              {{ expense.from }}
            </td>
            <td>
              {{ expense.to }}
            </td>
            <td>
              Actions
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserExpensesStore } from "../stores/UserExpenses";
import { useTeamExpensesStore } from "../stores/UserTeamExpenses";
const expensesStore = useUserExpensesStore();
const teamExpensesStore = useTeamExpensesStore();
const showExpense = ref(false);
const showTeam = ref(false);
const ShowMyExpenses = () => {
  showTeam.value = false;
  showExpense.value = !showExpense.value;

};
const ShowTeamExpenses = () => {
  showExpense.value = false;
  showTeam.value = !showTeam.value;
};
onMounted(async () => {
  await expensesStore.initExpenses();
  await teamExpensesStore.initExpenses();
});
</script>

<style>
.expenses-table {
  display: flex;
  flex-direction: column;
  margin: 20px;

}

.expenses-row,
.expenses-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.header-button {
  padding: 10px;
  margin-top: 20px;
  background-color: green;
  height: 40px;
  color: white;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.header-button:hover {
  color: wheat;
  background-color: rgb(3, 99, 3);
  cursor: pointer;
}

.page-header {
  display: flex;
  flex-direction: row;
  padding: auto;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  color: rgb(92, 83, 66);
}

.card-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.5s ease;
  height: 0;
}

.expenses-card {
  width: 95%;
  margin: 20px;

  background-color: rgb(45, 126, 45);
  max-height: 40%;
  overflow: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.356);
  color: white;
}

.card-title {
  padding-left: 10px;
  padding-bottom: 10px;
  margin: 5px;
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.show {
  height: 40%;
}

.show-card {
  max-height: 100% !important;
}

.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.7s ease;
  margin: 20px;
  padding: 10px;
  background-color: aliceblue;
  width: 40%;
  max-height: min-content;

  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

body {
  background-color: antiquewhite !important;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: space-between;
}

.card-inner-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: space-between;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}

.page-content {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  margin: auto;
  padding: 20px;
  width: 40%;
  height: 40%;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  background-color: antiquewhite;
}

.test-enter-active,
.test-leave-active {
  transition: height 0.5s ease;
}

.test-enter-from,
.test-leave-to {
  height: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: rotate(180deg);
}

.arrow {
  transition: transform 0.5s ease;
  height: 20px;
  width: 25px;
}

.expenses-title {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: baseline;
  width: 40%;
}

.rotate {
  transform: rotate(180deg);
}

.expenses-title>p {
  height: 25px;
}

.expenseT-enter-active,
.expenseT-leave-active {
  transition: height 0.5s ease;
}

.expenseT-enter-from,
.expenseT-leave-to {
  height: 0;
}
</style>
