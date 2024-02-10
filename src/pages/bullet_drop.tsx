import React, { useEffect } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    bezierCurve: true,
    elements: {
        line: {
            tension: .3
        }
    },
    plugins: {
      legend: {
        position: 'top' as const,
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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random()*10000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random()*10000),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
};

const colorArr = [
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

interface GlobalBulletDropData {
    [key: string]: BulletDropData;
}
interface BulletDropData {
    [key: string]: number[];
}
function BulletDrop():JSX.Element {

    const [localOptions, setLocalOptions] = React.useState(options);
    const [localData, setLocalData] = React.useState(data);

    const weaponOptions = ['Pistol', 'Rifle'];
    const zeroes        = [25, 36, 50, 100];

    // pistol step is 10, rifle step is 50
    const dropMap:GlobalBulletDropData = {
        'pistol': {
            '15':  [-0.5, -0.09, 0.01, -0.20, -0.74, -1.62, -2.84, -4.42],
            '25':  [-0.5, -0.07, 0.06, -0.13, -0.64, -1.49, -2.69, -4.25],
            '50':  [-0.5,  0.24, 0.66, 0.78, 0.56, 0.01, -0.89, -2.14],
        },
        'rifle': {
            '25':  [-2,  1.72, 4.42, 5.96, 6.16,  4.82,  1.69],
            '36':  [-2,  0.63, 2.23, 2.67, 1.78, -0.66, -4.88],
            '50':  [-2, -0.01, 0.97, 0.78, -0.75,-3.81, -8.67],
            '100': [-2, -0.49, 0.00,-0.67, -2.68,-6.23,-11.57]
        }
    }

    function getData(weapon:string) {
        const labels = [];
        const mydatasets: { label: string; data: number[]; borderColor: string; backgroundColor: string; }[] = [];

        const step = (weapon === 'pistol') ? 10 : 50;

        for (let i = 0; i < dropMap[weapon]['25'].length; i++) {
            const yards = i * step;
            labels.push(yards.toString() + " yds")
        }
       
        let i=0;
        Object.keys(dropMap[weapon]).forEach((key) => {
            mydatasets.push({
                label: key + " yd zero",
                data: dropMap[weapon][key],
                borderColor: colorArr[i],
                backgroundColor: colorArr[i++],
            })
        }); 

        return {
            labels,
            datasets: mydatasets
        }
    }

    useEffect(() => {
        setLocalData(getData('pistol'));
    }, []);

    return (
        <div>
            <h1 className="text-2xl text-center mt-8 tracking-widest">Bullet Drop</h1>
            <div className="bg-altrow p-4">
                <Line className="bg-grey-500" options={localOptions} data={localData} />
            </div>
            <h2 className="text-lg text-center mt-8 tracking-widest">Disclaimer:</h2>
            <p className="font-extralight opacity-80 mx-auto px-4 py-2 block max-w-xl tracking-wider text-base">This calculator assumes you&apos;re shooting 124gr 9mm with 1150fps muzzle velocity for pistols with an optic mounted .5in HOB and 55gr .223 with 3215fps muzzle velocity with an optic mounted 2in HOB for rifles.</p>
            <p className="font-extralight opacity-80 mx-auto px-4 py-2 block max-w-xl tracking-wider text-base">This assumption was made to reduce the amount of input and still try to get &quot;close enough&quot; for you to walk it in on your own at the range.  However, your particular setup may be wildly different than this. </p>
            <p className="font-extralight opacity-80 mx-auto px-4 py-2 block max-w-xl tracking-wider text-base">For the most accurate results you can visit <a className="font-bold" href="https://www.jbmballistics.com/ballistics/calculators/calculators.shtml">JBM Ballistics</a> or <a className="font-bold" href="https://shooterscalculator.com/ballistic-trajectory-chart.php">Shooters Calculator</a> and enter data for your specific setup.</p>
        </div>
    );
}

export default BulletDrop;