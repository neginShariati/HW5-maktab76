var xyValues = [];
new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{ ticks: { min: -20, max: 20 } }],
      yAxes: [{ ticks: { min: -20, max: 20 } }],
    },
  },
});

let firstXY = [
  {
    x: 2,
    y: -9,
  },
  {
    x: 13,
    y: -4,
  },
];
let secondXY = [
  {
    x: 5,
    y: -11,
  },
  {
    x: 7,
    y: -2,
  },
];
const calcArea = (firstRec, secondRec) => {
  let currXY = [];

  if (firstRec[0].x < secondRec[0].x) {
    currXY[0] = { x: secondRec[0].x };
  } else {
    currXY[0] = { x: firstRec[0].x };
  }
  if (firstRec[0].y < secondRec[0].y) {
    currXY[0].y = secondRec[0].y;
  } else {
    currXY[0].y = firstRec[0].y;
  }

  if (firstRec[1].x < secondRec[1].x) {
    currXY[1] = { x: firstRec[1].x };
  } else {
    currXY[1] = { x: secondRec[1].x };
  }
  if (firstRec[1].y < secondRec[1].y) {
    currXY[1].y = firstRec[1].y;
  } else {
    currXY[1].y = secondRec[1].y;
  }

  let t = Math.abs(currXY[0].x - currXY[1].x);
  let a = Math.abs(currXY[0].y - currXY[1].y);
  let colorArea = t * a;

  return colorArea;
};

console.log(calcArea(firstXY, secondXY));
