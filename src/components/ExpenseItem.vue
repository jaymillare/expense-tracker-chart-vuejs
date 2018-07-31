<template>
<div class="ui segment">
  <i @click="emitDeleteExpense" class="red close circle icon"></i>
  <b>Date:</b> {{ item.x }}
  <br>
  <b>Expense:</b> $ {{ item.y }}
</div>
</template>

<script>
export default {
  name: "ExpenseItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    emitDeleteExpense() {
      this.$emit("deleteExpense", this.item.id);
    }
  }
}
</script>

<style scoped>
.close.circle.icon {
  position: absolute;
  right: 0.2em;
  top: 0.5em;
}
</style>
