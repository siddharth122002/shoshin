"use client";
import React from "react";
import Positions from "./Positions";
import Announcement from "./Announcement";

function Main() {
  const opportunities = [
    {
      title: "Available Position",
      number: 24,
      requirement: "4 Urgently needed",
      color: "text-[#FF5151]",
      bgColor: "bg-[#FFEFE7]",
    },
    {
      title: "Job Open",
      number: 10,
      requirement: "4 Active hiring",
      color: "text-[#3786F1]",
      bgColor: "bg-[#E8F0FB]",
    },
    {
      title: "New Employees",
      number: 24,
      requirement: "4 Department",
      color: "text-[#EE61CF]",
      bgColor: "bg-[#FDEBF9]",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col">
      <div className="md:pl-10 pl-5 py-5 md:py-10 w-full md:w-2/4 ">
        <p className="text-2xl font-semibold text-[#121843]">Dashboard</p>
        <div className="flex flex-col md:flex-row justify-between mt-5 gap-2 ">
          {opportunities.map((data, i) => (
            <Positions key={i} data={data} />
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row md:gap-3 pr-4 md:pr-0">
          <div className="md:w-1/2 w-full p-3 my-5 border-[2px] border-[#E0E0E0] flex  items-center gap-4 flex-wrap rounded-lg">
            <div>
              <p className="text-xl text-[#121843]">Total Employees</p>
              <p className="text-[#121843] text-5xl font-semibold mb-6 mt-3">
                216
              </p>
              <p className="text-[#686868]">120 Men</p>
              <p className="text-[#686868]">96 Women</p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <svg
                  width="117"
                  height="79"
                  viewBox="0 0 117 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5"
                    stroke="#FF5151"
                    strokeWidth={2}
                  />
                  <path
                    d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z"
                    fill="url(#paint0_linear_5064_37)"
                  />
                  <path
                    d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80667 43.88 6.74V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 4.00333 46.0633 3.94667 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94667 47.1 4.00333 47.1 4.07V5.97H49.02C49.0867 5.97 49.1433 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.74C49.26 6.80667 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM50.108 9.5C50.0413 9.5 49.9846 9.47667 49.938 9.43C49.8913 9.38333 49.868 9.32667 49.868 9.26V8.75C49.868 8.69 49.8813 8.62 49.908 8.54C49.9413 8.45333 50.0113 8.36667 50.118 8.28L51.698 6.71C52.138 6.36333 52.4913 6.07 52.758 5.83C53.0313 5.58333 53.228 5.36 53.348 5.16C53.4746 4.95333 53.538 4.75 53.538 4.55C53.538 4.25 53.4546 4.00667 53.288 3.82C53.128 3.63333 52.8713 3.54 52.518 3.54C52.2846 3.54 52.088 3.59 51.928 3.69C51.768 3.78333 51.6413 3.91 51.548 4.07C51.4613 4.23 51.4013 4.40667 51.368 4.6C51.3546 4.68667 51.318 4.74667 51.258 4.78C51.198 4.81333 51.138 4.83 51.078 4.83H50.188C50.128 4.83 50.078 4.81 50.038 4.77C49.998 4.73 49.978 4.68333 49.978 4.63C49.9846 4.34333 50.0446 4.06667 50.158 3.8C50.2713 3.52667 50.4346 3.28667 50.648 3.08C50.868 2.86667 51.1346 2.69667 51.448 2.57C51.7613 2.44333 52.1146 2.38 52.508 2.38C53.0613 2.38 53.518 2.47333 53.878 2.66C54.2446 2.84667 54.518 3.1 54.698 3.42C54.8846 3.74 54.978 4.1 54.978 4.5C54.978 4.81333 54.918 5.10333 54.798 5.37C54.678 5.63 54.5046 5.88333 54.278 6.13C54.0513 6.37 53.778 6.61667 53.458 6.87L52.038 8.31H54.888C54.9613 8.31 55.018 8.33333 55.058 8.38C55.1046 8.42 55.128 8.47667 55.128 8.55V9.26C55.128 9.32667 55.1046 9.38333 55.058 9.43C55.018 9.47667 54.9613 9.5 54.888 9.5H50.108ZM56.7094 9.5C56.5694 9.5 56.4994 9.43333 56.4994 9.3C56.4994 9.26 56.5127 9.22333 56.5394 9.19L61.4694 2.69C61.516 2.63 61.5627 2.58333 61.6094 2.55C61.656 2.51667 61.7227 2.5 61.8094 2.5H62.3394C62.4794 2.5 62.5494 2.56667 62.5494 2.7C62.5494 2.74 62.536 2.77667 62.5094 2.81L57.5794 9.31C57.5327 9.37 57.486 9.41667 57.4394 9.45C57.3994 9.48333 57.3327 9.5 57.2394 9.5H56.7094ZM61.5194 9.56C61.0727 9.56 60.7194 9.43667 60.4594 9.19C60.1994 8.94333 60.056 8.62 60.0294 8.22C60.0227 8.04667 60.0194 7.89667 60.0194 7.77C60.0194 7.64333 60.0227 7.48667 60.0294 7.3C60.056 6.9 60.1927 6.57667 60.4394 6.33C60.6927 6.08333 61.0527 5.96 61.5194 5.96C61.9927 5.96 62.3527 6.08333 62.5994 6.33C62.8527 6.57667 62.9894 6.9 63.0094 7.3C63.0227 7.48667 63.0294 7.64333 63.0294 7.77C63.0294 7.89667 63.0227 8.04667 63.0094 8.22C62.9894 8.62 62.846 8.94333 62.5794 9.19C62.3194 9.43667 61.966 9.56 61.5194 9.56ZM61.5194 8.78C61.666 8.78 61.7794 8.75 61.8594 8.69C61.946 8.63 62.0094 8.55333 62.0494 8.46C62.0894 8.36667 62.1094 8.27333 62.1094 8.18C62.1227 8.01333 62.1294 7.87333 62.1294 7.76C62.1294 7.64 62.1227 7.50333 62.1094 7.35C62.1027 7.19667 62.056 7.05667 61.9694 6.93C61.8827 6.79667 61.7327 6.73 61.5194 6.73C61.3127 6.73 61.166 6.79667 61.0794 6.93C60.9927 7.05667 60.9427 7.19667 60.9294 7.35C60.9227 7.50333 60.9194 7.64 60.9194 7.76C60.9194 7.87333 60.9227 8.01333 60.9294 8.18C60.9427 8.27333 60.966 8.36667 60.9994 8.46C61.0394 8.55333 61.0994 8.63 61.1794 8.69C61.266 8.75 61.3794 8.78 61.5194 8.78ZM57.5294 6.02C57.0827 6.02 56.7294 5.90333 56.4694 5.67C56.2094 5.43667 56.066 5.12 56.0394 4.72C56.0327 4.54667 56.0294 4.39667 56.0294 4.27C56.0294 4.13667 56.0327 3.97667 56.0394 3.79C56.066 3.39 56.2027 3.06667 56.4494 2.82C56.7027 2.57333 57.0627 2.45 57.5294 2.45C58.0027 2.45 58.3627 2.57333 58.6094 2.82C58.8627 3.06667 58.9994 3.39 59.0194 3.79C59.0327 3.97667 59.0394 4.13667 59.0394 4.27C59.0394 4.39667 59.0327 4.54667 59.0194 4.72C58.9994 5.12 58.856 5.43667 58.5894 5.67C58.3294 5.90333 57.976 6.02 57.5294 6.02ZM57.5294 5.28C57.676 5.28 57.7894 5.25 57.8694 5.19C57.956 5.13 58.0194 5.05333 58.0594 4.96C58.0994 4.86667 58.1194 4.77 58.1194 4.67C58.1327 4.50333 58.1394 4.36333 58.1394 4.25C58.1394 4.13 58.1327 3.99333 58.1194 3.84C58.1127 3.68667 58.066 3.54667 57.9794 3.42C57.8927 3.29333 57.7427 3.23 57.5294 3.23C57.3227 3.23 57.176 3.29333 57.0894 3.42C57.0027 3.54667 56.956 3.68667 56.9494 3.84C56.9427 3.99333 56.9394 4.13 56.9394 4.25C56.9394 4.36333 56.9427 4.50333 56.9494 4.67C56.956 4.77 56.976 4.86667 57.0094 4.96C57.0494 5.05333 57.1094 5.13 57.1894 5.19C57.276 5.25 57.3894 5.28 57.5294 5.28Z"
                    fill="#FF5151"
                  />
                  <path
                    d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5"
                    stroke="#FF5151"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5064_37"
                      x1="59"
                      y1="-15.5"
                      x2="81"
                      y2="44"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF5151" />
                      <stop offset="1" stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="bg-[#FFEFE7] text-[#1c1c1c] px-2 rounded-md">
                +2% Past month
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full p-3 md:my-5 border-[2px] border-[#E0E0E0] flex  items-center gap-4 flex-wrap rounded-lg ">
            <div>
              <p className="text-xl text-[#121843]">Talent Request</p>
              <p className="text-[#121843] text-5xl font-semibold mb-6 mt-3">
                16
              </p>
              <p className="text-[#686868]">6 Men</p>
              <p className="text-[#686868]">10 Women</p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <svg
                  width="117"
                  height="79"
                  viewBox="0 0 117 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 51.5C1 51.5 16.2821 33.2086 30 30.5C40.431 28.4403 46.4876 35.5924 57 34C73.2778 31.5342 76.3958 13.9209 92.5 10.5C101.477 8.59307 115.5 10.5 115.5 10.5"
                    stroke="#FF5151"
                    strokeWidth={2}
                  />
                  <path
                    d="M30.5 30.3475C16.7821 33.0562 1.5 51.3475 1.5 51.3475V78.5H116V10.3475C116 10.3475 101.977 8.4406 93 10.3475C76.8958 13.7685 73.7778 31.3817 57.5 33.8475C46.9875 35.4399 40.931 28.2878 30.5 30.3475Z"
                    fill="url(#paint0_linear_5190_70)"
                  />
                  <path
                    d="M46.28 9.17C46.2133 9.17 46.1567 9.14667 46.11 9.1C46.0633 9.05333 46.04 8.99667 46.04 8.93V6.98H44.12C44.0533 6.98 43.9967 6.95667 43.95 6.91C43.9033 6.86333 43.88 6.80667 43.88 6.74V6.21C43.88 6.13667 43.9033 6.08 43.95 6.04C43.9967 5.99333 44.0533 5.97 44.12 5.97H46.04V4.07C46.04 4.00333 46.0633 3.94667 46.11 3.9C46.1567 3.85333 46.2133 3.83 46.28 3.83H46.86C46.9333 3.83 46.99 3.85333 47.03 3.9C47.0767 3.94667 47.1 4.00333 47.1 4.07V5.97H49.02C49.0867 5.97 49.1433 5.99333 49.19 6.04C49.2367 6.08 49.26 6.13667 49.26 6.21V6.74C49.26 6.80667 49.2367 6.86333 49.19 6.91C49.1433 6.95667 49.0867 6.98 49.02 6.98H47.1V8.93C47.1 8.99667 47.0767 9.05333 47.03 9.1C46.99 9.14667 46.9333 9.17 46.86 9.17H46.28ZM52.7026 9.61C52.1292 9.61 51.6459 9.51667 51.2526 9.33C50.8592 9.13667 50.5592 8.88667 50.3526 8.58C50.1526 8.27333 50.0459 7.94667 50.0326 7.6C50.0259 7.54 50.0426 7.49333 50.0826 7.46C50.1292 7.42 50.1826 7.4 50.2426 7.4H51.1726C51.2459 7.4 51.3059 7.41667 51.3526 7.45C51.4059 7.47667 51.4459 7.52667 51.4726 7.6C51.5392 7.8 51.6326 7.96333 51.7526 8.09C51.8792 8.21667 52.0226 8.31 52.1826 8.37C52.3492 8.43 52.5226 8.46 52.7026 8.46C52.9426 8.46 53.1592 8.41333 53.3526 8.32C53.5526 8.22 53.7126 8.07333 53.8326 7.88C53.9526 7.68667 54.0126 7.45 54.0126 7.17C54.0126 6.92333 53.9559 6.71 53.8426 6.53C53.7292 6.35 53.5726 6.21 53.3726 6.11C53.1792 6.00333 52.9559 5.95 52.7026 5.95C52.5159 5.95 52.3626 5.97333 52.2426 6.02C52.1226 6.06667 52.0192 6.12 51.9326 6.18C51.8526 6.24 51.7792 6.29333 51.7126 6.34C51.6526 6.38667 51.5826 6.41 51.5026 6.41H50.5826C50.5226 6.41 50.4692 6.39 50.4226 6.35C50.3826 6.30333 50.3626 6.25 50.3626 6.19L50.7126 2.77C50.7192 2.68333 50.7492 2.61667 50.8026 2.57C50.8559 2.52333 50.9192 2.5 50.9926 2.5H54.7526C54.8192 2.5 54.8759 2.52333 54.9226 2.57C54.9692 2.61667 54.9926 2.67333 54.9926 2.74V3.41C54.9926 3.47667 54.9692 3.53333 54.9226 3.58C54.8759 3.62667 54.8192 3.65 54.7526 3.65H51.8626L51.7026 5.28C51.8226 5.2 51.9826 5.12333 52.1826 5.05C52.3826 4.97667 52.6592 4.94 53.0126 4.94C53.3326 4.94 53.6359 4.99333 53.9226 5.1C54.2159 5.2 54.4759 5.35 54.7026 5.55C54.9292 5.74333 55.1059 5.98 55.2326 6.26C55.3659 6.53333 55.4326 6.84667 55.4326 7.2C55.4326 7.68667 55.3192 8.11 55.0926 8.47C54.8659 8.83 54.5492 9.11 54.1426 9.31C53.7359 9.51 53.2559 9.61 52.7026 9.61ZM56.9438 9.5C56.8038 9.5 56.7338 9.43333 56.7338 9.3C56.7338 9.26 56.7471 9.22333 56.7738 9.19L61.7038 2.69C61.7504 2.63 61.7971 2.58333 61.8438 2.55C61.8904 2.51667 61.9571 2.5 62.0438 2.5H62.5738C62.7138 2.5 62.7838 2.56667 62.7838 2.7C62.7838 2.74 62.7704 2.77667 62.7438 2.81L57.8138 9.31C57.7671 9.37 57.7204 9.41667 57.6738 9.45C57.6338 9.48333 57.5671 9.5 57.4738 9.5H56.9438ZM61.7538 9.56C61.3071 9.56 60.9538 9.43667 60.6938 9.19C60.4338 8.94333 60.2904 8.62 60.2638 8.22C60.2571 8.04667 60.2538 7.89667 60.2538 7.77C60.2538 7.64333 60.2571 7.48667 60.2638 7.3C60.2904 6.9 60.4271 6.57667 60.6738 6.33C60.9271 6.08333 61.2871 5.96 61.7538 5.96C62.2271 5.96 62.5871 6.08333 62.8338 6.33C63.0871 6.57667 63.2238 6.9 63.2438 7.3C63.2571 7.48667 63.2638 7.64333 63.2638 7.77C63.2638 7.89667 63.2571 8.04667 63.2438 8.22C63.2238 8.62 63.0804 8.94333 62.8138 9.19C62.5538 9.43667 62.2004 9.56 61.7538 9.56ZM61.7538 8.78C61.9004 8.78 62.0138 8.75 62.0938 8.69C62.1804 8.63 62.2438 8.55333 62.2838 8.46C62.3238 8.36667 62.3438 8.27333 62.3438 8.18C62.3571 8.01333 62.3638 7.87333 62.3638 7.76C62.3638 7.64 62.3571 7.50333 62.3438 7.35C62.3371 7.19667 62.2904 7.05667 62.2038 6.93C62.1171 6.79667 61.9671 6.73 61.7538 6.73C61.5471 6.73 61.4004 6.79667 61.3138 6.93C61.2271 7.05667 61.1771 7.19667 61.1638 7.35C61.1571 7.50333 61.1538 7.64 61.1538 7.76C61.1538 7.87333 61.1571 8.01333 61.1638 8.18C61.1771 8.27333 61.2004 8.36667 61.2338 8.46C61.2738 8.55333 61.3338 8.63 61.4138 8.69C61.5004 8.75 61.6138 8.78 61.7538 8.78ZM57.7638 6.02C57.3171 6.02 56.9638 5.90333 56.7038 5.67C56.4438 5.43667 56.3004 5.12 56.2738 4.72C56.2671 4.54667 56.2638 4.39667 56.2638 4.27C56.2638 4.13667 56.2671 3.97667 56.2738 3.79C56.3004 3.39 56.4371 3.06667 56.6838 2.82C56.9371 2.57333 57.2971 2.45 57.7638 2.45C58.2371 2.45 58.5971 2.57333 58.8438 2.82C59.0971 3.06667 59.2338 3.39 59.2538 3.79C59.2671 3.97667 59.2738 4.13667 59.2738 4.27C59.2738 4.39667 59.2671 4.54667 59.2538 4.72C59.2338 5.12 59.0904 5.43667 58.8238 5.67C58.5638 5.90333 58.2104 6.02 57.7638 6.02ZM57.7638 5.28C57.9104 5.28 58.0238 5.25 58.1038 5.19C58.1904 5.13 58.2538 5.05333 58.2938 4.96C58.3338 4.86667 58.3538 4.77 58.3538 4.67C58.3671 4.50333 58.3738 4.36333 58.3738 4.25C58.3738 4.13 58.3671 3.99333 58.3538 3.84C58.3471 3.68667 58.3004 3.54667 58.2138 3.42C58.1271 3.29333 57.9771 3.23 57.7638 3.23C57.5571 3.23 57.4104 3.29333 57.3238 3.42C57.2371 3.54667 57.1904 3.68667 57.1838 3.84C57.1771 3.99333 57.1738 4.13 57.1738 4.25C57.1738 4.36333 57.1771 4.50333 57.1838 4.67C57.1904 4.77 57.2104 4.86667 57.2438 4.96C57.2838 5.05333 57.3438 5.13 57.4238 5.19C57.5104 5.25 57.6238 5.28 57.7638 5.28Z"
                    fill="#FF5151"
                  />
                  <path
                    d="M52.5 17.5L54.5 15.5M54.5 15.5L56.5 17.5M54.5 15.5V22.5"
                    stroke="#FF5151"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5190_70"
                      x1="37"
                      y1="-10.5"
                      x2="61.5"
                      y2="52"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF5151" />
                      <stop offset="1" stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="bg-[#FFEFE7] text-[#1c1c1c] px-2 rounded-md">
                +5% Past month
              </p>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-[#E0E0E0] rounded-lg p-2 mr-4 md:mr-0 relative mt-4 md:mt-0">
          <Announcement />
        </div>
      </div>
      <div className="max-w-2/4 px-3 flex flex-col md:py-10 md:mt-14">
        <div>
          <div className="font-semibold text-lg text-white bg-[#1B204A] p-3 rounded-t-lg">
            Recently Activity
          </div>
          <div className="bg-[#121843] p-3 rounded-b-md">
            <p className="text-[#A0A3B4]">10.40 AM,Fri 10 Sept 2021</p>
            <p className="text-white text-2xl py-3">You Posted a New Job</p>
            <p className="text-[#D0D1D9] ">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
            <div className="text-[#FFFFFF] flex items-center justify-between mt-5">
              Today you makes 12 Activity
              <button className="bg-[#FF5151] rounded-md p-4 ">
                See All Activity
              </button>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-[#E0E0E0] rounded-lg p-2 relative mt-5 mb-48 md:mb-0">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-xl text-[#121843] font-semibold py-4">
                Upcoming Schedule
              </p>
              <div className="flex justify-center items-center gap-2 border-[#EFEFEF] border-[1px] p-2">
                <p className="text-[#686868]">Today, 13 Sep 2021 </p>
                <svg
                  width="12"
                  height="5"
                  viewBox="0 0 12 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0.5L6 4.5L11 0.5" stroke="#B2B2B2" />
                </svg>
              </div>
            </div>
            <p className="text-[#686868]  py-1">Priority</p>
            <div className="flex justify-between bg-[#FAFAFA] border-[#E0E0E0] border-[1px] p-3 rounded-md items-center mt-2">
              <div className="flex flex-col justify-center ">
                <p>Review candidate applications</p>
                <p className="text-xs text-[#686868]">Today - 11:30 AM</p>
              </div>
              <div className=" flex justify-center items-center gap-5">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                    fill="#B2B2B2"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[#686868]  py-2">Other</p>
            <div className="flex justify-between bg-[#FAFAFA] border-[#E0E0E0] border-[1px] p-3 rounded-md items-center mt-2">
              <div className="flex flex-col justify-center ">
                <p>Interview with candidates</p>
                <p className="text-xs text-[#686868]">Today, 10:30 AM</p>
              </div>
              <div className=" flex justify-center items-center gap-5">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                    fill="#B2B2B2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between bg-[#FAFAFA] border-[#E0E0E0] border-[1px] p-3 rounded-md items-center mt-2">
              <div className="flex flex-col justify-center ">
                <p>Short meeting with product designer from IT Department</p>
                <p className="text-xs text-[#686868]">Today, 09:15 AM</p>
              </div>
              <div className=" flex justify-center items-center gap-5">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                    fill="#B2B2B2"
                  />
                  <path
                    d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                    fill="#B2B2B2"
                  />
                </svg>
              </div>
            </div>
            <div className="border-[#E0E0E0] border-[1px]  absolute w-full right-0"></div>
            <p className="text-center text-[#FF5151] py-1 font-semibold">
              Create a New Schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
