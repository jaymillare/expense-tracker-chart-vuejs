<template>
<div>
  <div class="ui inverted fixed menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" src="./assets/logo.png">
        Expense Tracker
      </a>
    </div>
  </div>
  <div id="app" class="ui padded stackable two column grid">
    <div class="ui row">      
      <div class="twelve wide column">
        <expense-charts></expense-charts>
      </div>
      <div class="four wide column">
        <expense-list></expense-list>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ExpenseList from "./components/ExpenseList"
import ExpenseCharts from "./components/ExpenseCharts"

export default {
  name: "App",
  components: {
    ExpenseList,
    ExpenseCharts
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100vw;
}

#app .row {
  padding: 20px;
}

.logo {
  width: 20px !important;
}
</style>
