/**
 * Charts ChartsJS
 */

(function () {

	Chart.defaults.font.family = '"primary-font", "segoe ui", "tahoma"';

  // Color Variables
  const purpleColor = '#836AF9',
    yellowColor = '#ffe800',
    cyanColor = '#28dac6',
    orangeColor = '#FF8132',
    orangeLightColor = '#FDAC34',
    oceanBlueColor = '#299AFF',
    greyColor = '#4F5D70',
    greyLightColor = '#EDF1F4',
    blueColor = '#2B9AFF',
    blueLightColor = '#84D0FF';

  let borderColor, axisColor;

  if (isDarkStyle) {
    borderColor = config.colors_dark.borderColor;
    axisColor = config.colors_dark.axisColor; // x & y axis tick color
  } else {
    borderColor = config.colors.borderColor; // same as template border color
    axisColor = config.colors.axisColor; // x & y axis tick color\
  }

  // Set height according to their data-height
  // --------------------------------------------------------------------
  const chartList = document.querySelectorAll('.chartjs');
  chartList.forEach(function (chartListItem) {
    chartListItem.height = chartListItem.dataset.height;
  });

  // Bar Chart
  // --------------------------------------------------------------------
  const barChart = document.getElementById('barChart');
  if (barChart) {
    const barChartVar = new Chart(barChart, {
      type: 'bar',
      data: {
        labels: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12'
        ],
        datasets: [
          {
            data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
            backgroundColor: cyanColor,
            borderColor: 'transparent',
            maxBarThickness: 15,
            borderRadius: {
              topRight: 15,
              topLeft: 15
            }
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: axisColor
            }
          },
          y: {
            min: 0,
            max: 400,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              stepSize: 100,
              tickColor: borderColor,
              color: axisColor
            }
          }
        }
      }
    });
  }

  // Horizontal Bar Chart
  // --------------------------------------------------------------------

  const horizontalBarChart = document.getElementById('horizontalBarChart');
  if (horizontalBarChart) {
    const horizontalBarChartVar = new Chart(horizontalBarChart, {
      type: 'bar',
      data: {
        labels: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
        datasets: [
          {
            data: [710, 350, 470, 580, 230, 460, 120],
            backgroundColor: config.colors.info,
            borderColor: 'transparent',
            maxBarThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        elements: {
          bar: {
            borderRadius: {
              topRight: 15,
              bottomRight: 15
            }
          }
        },
        plugins: {
          tooltip: {
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            min: 0,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: axisColor
            }
          },
          y: {
            grid: {
              borderColor: borderColor,
              display: false
            },
            ticks: {
              color: axisColor
            }
          }
        }
      }
    });
  }

  // Line Chart
  // --------------------------------------------------------------------

  const lineChart = document.getElementById('lineChart');
  if (lineChart) {
    const lineChartVar = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        datasets: [
          {
            data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
            label: 'اروپا',
            borderColor: config.colors.danger,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: config.colors.danger,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: config.colors.danger
          },
          {
            data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
            label: 'آسیا',
            borderColor: config.colors.primary,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: config.colors.primary,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: config.colors.primary
          },
          {
            data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
            label: 'آفریقا',
            borderColor: yellowColor,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: yellowColor,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: yellowColor
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: axisColor
            }
          },
          y: {
            scaleLabel: {
              display: true
            },
            min: 0,
            max: 400,
            ticks: {
              color: axisColor,
              stepSize: 100
            },
            grid: {
              color: borderColor,
              borderColor: borderColor
            }
          }
        },
        plugins: {
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            position: 'top',
            align: 'start',
            rtl: isRtl,
            labels: {
              usePointStyle: true,
              padding: 35,
              boxWidth: 6,
              color: axisColor
            }
          }
        }
      }
    });
  }

  // Radar Chart
  // --------------------------------------------------------------------

  const radarChart = document.getElementById('radarChart');
  if (radarChart) {
    // For radar gradient color
    const gradientBlue = radarChart.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradientBlue.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
    gradientBlue.addColorStop(1, 'rgba(151, 135, 255, 0.8)');

    const gradientRed = radarChart.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradientRed.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
    gradientRed.addColorStop(1, 'rgba(255, 135, 135, 0.8)');

    const radarChartVar = new Chart(radarChart, {
      type: 'radar',
      data: {
        labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی", "استرالیا"],
        datasets: [
          {
            label: '2050',
            data: [25, 59, 90, 81, 60, 82],
            fill: true,
            pointStyle: 'dash',
            backgroundColor: gradientRed,
            borderColor: 'transparent',
            pointBorderColor: 'transparent'
          },
          {
            label: '1950',
            data: [40, 100, 40, 90, 40, 90],
            fill: true,
            pointStyle: 'dash',
            backgroundColor: gradientBlue,
            borderColor: 'transparent',
            pointBorderColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        scales: {
          r: {
            ticks: {
              maxTicksLimit: 1,
              display: false,
              color: axisColor
            },
            grid: {
              color: borderColor
            },
            angleLines: { color: borderColor },
            pointLabels: {
              color: axisColor
            }
          }
        },
        plugins: {
          legend: {
            rtl: isRtl,
            position: 'top',
            labels: {
              padding: 25,
              color: axisColor
            }
          },
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          }
        }
      }
    });
  }

  // Polar Chart
  // --------------------------------------------------------------------

  const polarChart = document.getElementById('polarChart');
  if (polarChart) {
    const polarChartVar = new Chart(polarChart, {
      type: 'polarArea',
      data: {
        labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی", "استرالیا"],
        datasets: [
          {
            label: 'جمعیت (میلیون)',
            backgroundColor: [purpleColor, yellowColor, orangeColor, oceanBlueColor, greyColor, cyanColor],
            data: [19, 17.5, 15, 13.5, 11, 9],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500
        },
        scales: {
          r: {
            ticks: {
              display: false,
              color: axisColor
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            rtl: isRtl,
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 25,
              boxWidth: 8,
              color: axisColor
            }
          }
        }
      }
    });
  }

  // Bubble Chart
  // --------------------------------------------------------------------

  const bubbleChart = document.getElementById('bubbleChart');
  if (bubbleChart) {
    const bubbleChartVar = new Chart(bubbleChart, {
      type: 'bubble',
      data: {
        animation: {
          duration: 10000
        },
        datasets: [
          {
            label: 'سری داده 1',
            backgroundColor: purpleColor,
            borderColor: purpleColor,
            data: [
              {
                x: 20,
                y: 74,
                r: 10
              },
              {
                x: 10,
                y: 110,
                r: 5
              },
              {
                x: 30,
                y: 165,
                r: 7
              },
              {
                x: 40,
                y: 200,
                r: 20
              },
              {
                x: 90,
                y: 185,
                r: 7
              },
              {
                x: 50,
                y: 240,
                r: 7
              },
              {
                x: 60,
                y: 275,
                r: 10
              },
              {
                x: 70,
                y: 305,
                r: 5
              },
              {
                x: 80,
                y: 325,
                r: 4
              },
              {
                x: 100,
                y: 310,
                r: 5
              },
              {
                x: 110,
                y: 240,
                r: 5
              },
              {
                x: 120,
                y: 270,
                r: 7
              },
              {
                x: 130,
                y: 300,
                r: 6
              }
            ]
          },
          {
            label: 'سری داده 2',
            backgroundColor: yellowColor,
            borderColor: yellowColor,
            data: [
              {
                x: 30,
                y: 72,
                r: 5
              },
              {
                x: 40,
                y: 110,
                r: 7
              },
              {
                x: 20,
                y: 135,
                r: 6
              },
              {
                x: 10,
                y: 160,
                r: 12
              },
              {
                x: 50,
                y: 285,
                r: 5
              },
              {
                x: 60,
                y: 235,
                r: 5
              },
              {
                x: 70,
                y: 275,
                r: 7
              },
              {
                x: 80,
                y: 290,
                r: 4
              },
              {
                x: 90,
                y: 250,
                r: 10
              },
              {
                x: 100,
                y: 220,
                r: 7
              },
              {
                x: 120,
                y: 230,
                r: 4
              },
              {
                x: 110,
                y: 320,
                r: 15
              },
              {
                x: 130,
                y: 330,
                r: 7
              }
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            min: 0,
            max: 140,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              stepSize: 10,
              color: axisColor
            }
          },
          y: {
            min: 0,
            max: 400,
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              stepSize: 100,
              color: axisColor
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          }
        }
      }
    });
  }

  // Doughnut Chart
  // --------------------------------------------------------------------

  const doughnutChart = document.getElementById('doughnutChart');
  if (doughnutChart) {
    const doughnutChartVar = new Chart(doughnutChart, {
      type: 'doughnut',
      data: {
        labels: ['تبلت', 'موبایل', 'دسکتاپ'],
        datasets: [
          {
            data: [10, 10, 80],
            backgroundColor: [cyanColor, orangeLightColor, config.colors.primary],
            borderWidth: 0,
            pointStyle: 'rectRounded'
          }
        ]
      },
      options: {
        responsive: true,
        animation: {
          duration: 500
        },
        cutout: '68%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '',
                  value = context.parsed;
                const output = ' ' + label + ' : ' + value + ' %';
                return output;
              }
            },
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          }
        }
      }
    });
  }

  // Scatter Chart
  // --------------------------------------------------------------------

  const scatterChart = document.getElementById('scatterChart');
  if (scatterChart) {
    const scatterChartVar = new Chart(scatterChart, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'آیفون',
            data: [
              {
                x: 72,
                y: 225
              },
              {
                x: 81,
                y: 270
              },
              {
                x: 90,
                y: 230
              },
              {
                x: 103,
                y: 305
              },
              {
                x: 103,
                y: 245
              },
              {
                x: 108,
                y: 275
              },
              {
                x: 110,
                y: 290
              },
              {
                x: 111,
                y: 315
              },
              {
                x: 109,
                y: 350
              },
              {
                x: 116,
                y: 340
              },
              {
                x: 113,
                y: 260
              },
              {
                x: 117,
                y: 275
              },
              {
                x: 117,
                y: 295
              },
              {
                x: 126,
                y: 280
              },
              {
                x: 127,
                y: 340
              },
              {
                x: 133,
                y: 330
              }
            ],
            backgroundColor: config.colors.primary,
            borderColor: 'transparent',
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 5
          },
          {
            label: 'سامسونگ نوت',
            data: [
              {
                x: 13,
                y: 95
              },
              {
                x: 22,
                y: 105
              },
              {
                x: 17,
                y: 115
              },
              {
                x: 19,
                y: 130
              },
              {
                x: 21,
                y: 125
              },
              {
                x: 35,
                y: 125
              },
              {
                x: 13,
                y: 155
              },
              {
                x: 21,
                y: 165
              },
              {
                x: 25,
                y: 155
              },
              {
                x: 18,
                y: 190
              },
              {
                x: 26,
                y: 180
              },
              {
                x: 43,
                y: 180
              },
              {
                x: 53,
                y: 202
              },
              {
                x: 61,
                y: 165
              },
              {
                x: 67,
                y: 225
              }
            ],
            backgroundColor: yellowColor,
            borderColor: 'transparent',
            pointRadius: 5
          },
          {
            label: 'وال پلاس',
            data: [
              {
                x: 70,
                y: 195
              },
              {
                x: 72,
                y: 270
              },
              {
                x: 98,
                y: 255
              },
              {
                x: 100,
                y: 215
              },
              {
                x: 87,
                y: 240
              },
              {
                x: 94,
                y: 280
              },
              {
                x: 99,
                y: 300
              },
              {
                x: 102,
                y: 290
              },
              {
                x: 110,
                y: 275
              },
              {
                x: 111,
                y: 250
              },
              {
                x: 94,
                y: 280
              },
              {
                x: 92,
                y: 340
              },
              {
                x: 100,
                y: 335
              },
              {
                x: 108,
                y: 330
              }
            ],
            backgroundColor: cyanColor,
            borderColor: 'transparent',
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 800
        },
        plugins: {
          legend: {
            position: 'top',
            rtl: isRtl,
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 25,
              boxWidth: 6,
              color: axisColor
            }
          },
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          }
        },
        scales: {
          x: {
            min: 0,
            max: 140,
            grid: {
              color: borderColor,
              drawTicks: false,
              borderColor: borderColor
            },
            ticks: {
              stepSize: 10,
              color: axisColor
            }
          },
          y: {
            min: 0,
            max: 400,
            grid: {
              color: borderColor,
              drawTicks: false,
              borderColor: borderColor
            },
            ticks: {
              stepSize: 100,
              color: axisColor
            }
          }
        }
      }
    });
  }

  // LineArea Chart
  // --------------------------------------------------------------------

  const lineAreaChart = document.getElementById('lineAreaChart');
  if (lineAreaChart) {
    const lineAreaChartVar = new Chart(lineAreaChart, {
      type: 'line',
      data: {
        labels: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
          ''
        ],
        datasets: [
          {
            label: 'آفریقا',
            data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
            tension: 0,
            fill: true,
            backgroundColor: blueColor,
            pointStyle: 'circle',
            borderColor: 'transparent',
            pointRadius: 0.5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: blueColor,
            pointHoverBorderColor: config.colors.white
          },
          {
            label: 'آسیا',
            data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
            tension: 0,
            fill: true,
            backgroundColor: blueLightColor,
            pointStyle: 'circle',
            borderColor: 'transparent',
            pointRadius: 0.5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: blueLightColor,
            pointHoverBorderColor: config.colors.white
          },
          {
            label: 'اروپا',
            data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
            tension: 0,
            fill: true,
            backgroundColor: greyLightColor,
            pointStyle: 'circle',
            borderColor: 'transparent',
            pointRadius: 0.5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: greyLightColor,
            pointHoverBorderColor: config.colors.white
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            rtl: isRtl,
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 35,
              boxWidth: 6,
              color: axisColor
            }
          },
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          }
        },
        scales: {
          x: {
            grid: {
              color: 'transparent',
              borderColor: borderColor
            },
            ticks: {
              color: axisColor
            }
          },
          y: {
            min: 0,
            max: 400,
            grid: {
              color: 'transparent',
              borderColor: borderColor
            },
            ticks: {
              stepSize: 100,
              color: axisColor
            }
          }
        }
      }
    });
  }
})();
