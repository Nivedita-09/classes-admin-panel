"use client";
import React from "react";
import Image from "next/image";
import Image1 from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import faker from "faker"; // Make sure this line is correct

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export default function Dashboard() {
  return (
    <div className="w-full">
      <h3 className="m-4 font-semibold text-xl ">Dashboard</h3>
      <div className="grid grid-cols-4 gap-4 justify-center">
        <div className="bg-[#2b3140] p-2 rounded flex flex-row justify-between w-52 mx-auto">
          <Image src={Image1} alt="img1" width={50} height={50} />
          <div>
            <p className="text-[#96a2b4] font-medium text-sm ">New Students</p>
            <p className="text-green-400 font-semibold text-base">758</p>
          </div>
        </div>
        <div className="bg-[#2b3140] p-2 rounded flex flex-row justify-between w-52 mx-auto">
          <Image src={Image2} alt="img1" width={50} height={50} />
          <div>
            <p className="text-[#96a2b4] font-medium text-sm ">Total Courses</p>
            <p className="text-green-400 font-semibold text-base">758</p>
          </div>
        </div>
        <div className="bg-[#2b3140] p-2 rounded flex flex-row justify-between w-52 mx-auto">
          <Image src={Image3} alt="img1" width={50} height={50} />
          <div>
            <p className="text-[#96a2b4] font-medium text-sm ">
              Total Teachers
            </p>
            <p className="text-green-400 font-semibold text-base">758</p>
          </div>
        </div>
        <div className="bg-[#2b3140] p-2 rounded flex flex-row justify-between w-52 mx-auto">
          <Image src={Image4} alt="img1" width={50} height={50} />
          <div>
            <p className="text-[#96a2b4] font-medium text-sm ">
              Fees Collection
            </p>
            <p className="text-green-400 font-semibold text-base">$75800</p>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-4 justify-center">
        <div className="w-[50%] bg-[#2b3140] p-2 rounded flex flex-row justify-between">
     
        </div>
      </div> */}
    </div>
  );
}
