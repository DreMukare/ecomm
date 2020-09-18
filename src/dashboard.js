const productName = [];
document.addEventListener("DOMContentLoaded", function () {
  fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
      Highcharts.chart("container", {
        title: {
          text: "Daily Sales Overview",
        },
        series: [
          {
            data: data,
          },
        ],
      });
    });
});
