export const options = {
    responsive: true,
    bezierCurve: true,
    elements: {
        line: {
            tension: .3
        }
    },
    plugins: {
      legend: {
        color: 'white',
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
      datalabels: {
        color: 'white',
      },
      title: {
        display: false,
      },
    },
    scales: {
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
        y: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
    }
  };
  
  export const colorArr = [
  "#FF7F50", // Coral
  "#40E0D0", // Turquoise
  "#FF00FF", // Magenta
  "#7FFF00", // Chartreuse
  "#0F52BA", // Sapphire blue
  "#FFA500", // Tangerine
  "#50C878", // Emerald green
  "#8A2BE2"  // Violet
  // Add more colors as needed
  ];