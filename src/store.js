import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    expenses: [
      { id: 1, x: '2018-07-22', y: 56 },
      { id: 2, x: '2018-07-23', y: 12 },
      { id: 3, x: '2018-07-24', y: 77 },
      { id: 4, x: '2018-07-25', y: 30 },
      { id: 5, x: '2018-07-26', y: 35 },
      { id: 6, x: '2018-07-27', y: 18 },
      { id: 7, x: '2018-07-29', y: 89 },
      { id: 8, x: '2018-07-30', y: 14 }
    ]
  },
  getters: {
    sortedExpenses(state) {
      return state.expenses.sort((a, b) => {
        let c = new Date(a.x);
        let d = new Date(b.x);
        return c - d;
      });
    }
  },
  mutations: {
    addExpense(state, payload) {
      state.expenses.push(payload);
      console.log('addExpense store: ', state.expenses);
    },
    deleteExpense(state, id) {
      let index = state.expenses
        .map(item => {
          return item.id;
        })
        .indexOf(id);
      state.expenses.splice(index, 1);
      console.log('deleteExpense store: ', state.expenses);
    }
  }
});
