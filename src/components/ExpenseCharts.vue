<template>
<div>
  <canvas id="myChart" width="400" height="250"></canvas>
</div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "ExpenseCharts",
  watch: {
    chartData: function (newVal, oldVal) {
      this.updateExpenseChart(this.expenseChart);
    }
  },
  data() {
    return {
      expenseChart: []
    }
  },
  computed: {
    chartData() {
      return this.$store.getters.sortedExpenses;
    }
  },
  methods: {
    expenseChartConfig: function (chartData) {
      return {
        type: "line",
        data: {
          datasets: [{
            data: chartData,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,0.1)",
            borderWidth: 5,
            fill: true,
            label: "Expenses in $",
            lineTension: 0.4,
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBorderWidth: 5,
            pointRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 6,
            pointHoverRadius: 5
          }]
        },
        options: {
          showLines: true,
          title: {
            display: true,
            text: "Trends in Expenditure Over Time"
          },
          scales: {
            xAxes: [{
              type: "time",
              time: {
                unit: "day",
                unitStepSize: 0.5,
                round: "day",
                displayFormats: {
                  "day": "MMM DD, YY"
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Date"
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: "Expense"
              }
            }]
          }          
        }
      }
    },
    createExpenseChart(chartData) {
      let ctx = document.getElementById("myChart");
      this.expenseChart = new Chart(ctx, this.expenseChartConfig(chartData));
    },
    updateExpenseChart(chart) {
      chart.update();
    }
  },
  mounted() {
    this.createExpenseChart(this.chartData);
  }
}
</script>
