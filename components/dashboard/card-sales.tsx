'use client';

import { FaArrowTrendUp } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoTriangle } from 'react-icons/io5';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CardSales() {
  const option = {
    chart: {
      id: 'apexchart-example',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.8,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 4,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    xaxis: {
      categories: [
        '01 February',
        '02 February',
        '03 February',
        '04 February',
        '05 February',
        '06 February',
        '07 February',
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [440, 441, 442, 441, 442, 443],
      color: '#1A56DB',
    },
  ];

  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200">
        <div className="w-full scroll-auto flex flex-col gap-1">
          <div className="flex justify-between mb-1">
            <div className="">
              <h1 className="text-xl font-semibold">Sales</h1>
            </div>
            <div className="flex relative gap-2 items-center">
              <div className="absolute bg-[#c4f1e2] p-2 w-[30px] h-[30px] flex justify-center items-center rounded-full right-2">
                <FaArrowTrendUp size="20px" color="green" />
              </div>
            </div>
          </div>
          <ApexChart
            type="area"
            options={option}
            series={series}
            height="40%"
            width="100%"
            className="max-h-min"
          />
          {/* <div className="relative overflow-hidden bg-blue-500 rounded-lg py-8 px-12">
            <div className="absolute inset-0 w-full h-full animate-wave bg-gradient-to-r from-blue-700 to-blue-500 opacity-25"></div>
          </div> */}
          <div className="font-semibold text-xl">446</div>
          <div>Number of sales</div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <span className="bg-[#dde9ec] p-1 rounded-full">
              <IoMdCloseCircle color="#5ca2f5" />
            </span>
            <span>36%</span>
            <span>
              <IoTriangle color="#53e4b1" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
