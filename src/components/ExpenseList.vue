<template>
<div>
  <expense-input @addExpense="addExpense">
  </expense-input>
  <expense-item v-for="item in expenses" :key="item.id" :item="item" @deleteExpense="deleteExpense">
  </expense-item>
</div>
</template>

<script>
import ExpenseItem from "./ExpenseItem"
import ExpenseInput from "./ExpenseInput"
export default {
  name: "ExpenseList",
  components: {
    ExpenseItem,
    ExpenseInput
  },
  computed: {
    expenses() {
      return this.$store.getters.sortedExpenses;
    }
  },
  methods: {
    addExpense(payload) {
      this.$store.commit('addExpense', payload);
    },
    deleteExpense(id) {
      this.$store.commit('deleteExpense', id);
    }
  }
}
</script>
