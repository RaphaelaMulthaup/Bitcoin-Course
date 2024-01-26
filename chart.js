function renderChart(){
   const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'line',
data: {
  labels: month,
  datasets: [{
    label: 'Bitcoin-Kurs in Euro',
    data: course,
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
}
