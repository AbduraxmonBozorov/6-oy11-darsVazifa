import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js komponentlarini ro'yxatga olish
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// JSON ma'lumotlarini React komponentiga ko'chiring
const dataPoints = [
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152077,
      "time": 1565049600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153183,
      "time": 1565136000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152919,
      "time": 1565222400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153575,
      "time": 1565308800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153234,
      "time": 1565395200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015304,
      "time": 1565568000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152791,
      "time": 1565654400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154032,
      "time": 1565740800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151321,
      "time": 1565827200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151316,
      "time": 1565913600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150374,
      "time": 1566000000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150374,
      "time": 1566086400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150634,
      "time": 1566172800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149315,
      "time": 1566259200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150457,
      "time": 1566345600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151971,
      "time": 1566432000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152517,
      "time": 1566518400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151458,
      "time": 1566604800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151458,
      "time": 1566691200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150886,
      "time": 1566777600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151221,
      "time": 1566864000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01505,
      "time": 1566950400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149759,
      "time": 1567036800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150353,
      "time": 1567123200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149898,
      "time": 1567209600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149898,
      "time": 1567296000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149774,
      "time": 1567382400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149701,
      "time": 1567468800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149738,
      "time": 1567555200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150976,
      "time": 1567641600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151063,
      "time": 1567728000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152005,
      "time": 1567814400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152005,
      "time": 1567900800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151989,
      "time": 1567987200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152552,
      "time": 1568073600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015309,
      "time": 1568160000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152738,
      "time": 1568246400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154431,
      "time": 1568332800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015533,
      "time": 1568419200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015533,
      "time": 1568505600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156409,
      "time": 1568592000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156241,
      "time": 1568678400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155506,
      "time": 1568764800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155652,
      "time": 1568851200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156207,
      "time": 1568937600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156226,
      "time": 1569024000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156226,
      "time": 1569110400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156051,
      "time": 1569196800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156712,
      "time": 1569283200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156179,
      "time": 1569369600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155798,
      "time": 1569456000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155626,
      "time": 1569542400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154629,
      "time": 1569628800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154629,
      "time": 1569715200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154653,
      "time": 1569801600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154234,
      "time": 1569888000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153254,
      "time": 1569974400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153321,
      "time": 1570060800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153597,
      "time": 1570147200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015465,
      "time": 1570233600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015465,
      "time": 1570320000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154542,
      "time": 1570406400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153889,
      "time": 1570492800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153411,
      "time": 1570579200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153739,
      "time": 1570665600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155239,
      "time": 1570752000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155794,
      "time": 1570838400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155794,
      "time": 1570924800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155666,
      "time": 1571011200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155551,
      "time": 1571097600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155516,
      "time": 1571184000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155962,
      "time": 1571270400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156055,
      "time": 1571356800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156802,
      "time": 1571443200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156802,
      "time": 1571529600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156433,
      "time": 1571616000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015684,
      "time": 1571702400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157085,
      "time": 1571788800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01564,
      "time": 1571875200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156076,
      "time": 1571961600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156546,
      "time": 1572048000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156546,
      "time": 1572134400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156592,
      "time": 1572220800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156949,
      "time": 1572307200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156314,
      "time": 1572393600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156818,
      "time": 1572480000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015593,
      "time": 1572566400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157383,
      "time": 1572652800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157383,
      "time": 1572739200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157606,
      "time": 1572825600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157522,
      "time": 1572912000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015755,
      "time": 1572998400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156605,
      "time": 1573084800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157342,
      "time": 1573171200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156771,
      "time": 1573257600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156771,
      "time": 1573344000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156691,
      "time": 1573430400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156574,
      "time": 1573516800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155611,
      "time": 1573603200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155448,
      "time": 1573689600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156424,
      "time": 1573776000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156795,
      "time": 1573862400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156795,
      "time": 1573948800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156849,
      "time": 1574035200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015651,
      "time": 1574121600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156562,
      "time": 1574208000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156693,
      "time": 1574294400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156981,
      "time": 1574380800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156618,
      "time": 1574467200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156618,
      "time": 1574553600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156637,
      "time": 1574640000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156433,
      "time": 1574726400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156321,
      "time": 1574812800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156244,
      "time": 1574899200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156011,
      "time": 1574985600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015546,
      "time": 1575072000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015546,
      "time": 1575158400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155458,
      "time": 1575244800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155725,
      "time": 1575331200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156003,
      "time": 1575417600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156508,
      "time": 1575504000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156964,
      "time": 1575590400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015707,
      "time": 1575676800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015707,
      "time": 1575763200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156897,
      "time": 1575849600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015736,
      "time": 1575936000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157435,
      "time": 1576022400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157924,
      "time": 1576108800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159464,
      "time": 1576195200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159118,
      "time": 1576281600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159118,
      "time": 1576368000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159114,
      "time": 1576454400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160001,
      "time": 1576540800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160067,
      "time": 1576627200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159515,
      "time": 1576713600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160372,
      "time": 1576800000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160529,
      "time": 1576886400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160529,
      "time": 1576972800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016015,
      "time": 1577059200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160467,
      "time": 1577145600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161342,
      "time": 1577232000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161616,
      "time": 1577318400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160747,
      "time": 1577404800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161141,
      "time": 1577491200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161141,
      "time": 1577577600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160976,
      "time": 1577664000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161275,
      "time": 1577750400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161428,
      "time": 1577836800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161428,
      "time": 1577923200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162048,
      "time": 1578009600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016113,
      "time": 1578096000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016113,
      "time": 1578182400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016107,
      "time": 1578268800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161802,
      "time": 1578355200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161238,
      "time": 1578441600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163172,
      "time": 1578528000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163118,
      "time": 1578614400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163857,
      "time": 1578700800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163857,
      "time": 1578787200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163494,
      "time": 1578873600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163435,
      "time": 1578960000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016289,
      "time": 1579046400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016292,
      "time": 1579132800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162136,
      "time": 1579219200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162364,
      "time": 1579305600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162364,
      "time": 1579392000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162423,
      "time": 1579478400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016235,
      "time": 1579564800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016155,
      "time": 1579651200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016146,
      "time": 1579737600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161481,
      "time": 1579824000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161082,
      "time": 1579910400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161082,
      "time": 1579996800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160669,
      "time": 1580083200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158894,
      "time": 1580169600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160655,
      "time": 1580256000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159858,
      "time": 1580342400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158117,
      "time": 1580428800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156314,
      "time": 1580515200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156314,
      "time": 1580601600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156369,
      "time": 1580688000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015704,
      "time": 1580774400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158888,
      "time": 1580860800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158983,
      "time": 1580947200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157965,
      "time": 1581033600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155848,
      "time": 1581120000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155848,
      "time": 1581206400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156053,
      "time": 1581292800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156022,
      "time": 1581379200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157816,
      "time": 1581465600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157936,
      "time": 1581552000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157175,
      "time": 1581638400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157421,
      "time": 1581724800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157421,
      "time": 1581811200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157565,
      "time": 1581897600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157493,
      "time": 1581984000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156568,
      "time": 1582070400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157344,
      "time": 1582156800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155857,
      "time": 1582243200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155993,
      "time": 1582329600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155993,
      "time": 1582416000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155485,
      "time": 1582502400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153139,
      "time": 1582588800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153109,
      "time": 1582675200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152722,
      "time": 1582761600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150775,
      "time": 1582848000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149852,
      "time": 1582934400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149852,
      "time": 1583020800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0148988,
      "time": 1583107200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150583,
      "time": 1583193600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151044,
      "time": 1583280000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150892,
      "time": 1583366400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0148008,
      "time": 1583452800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145858,
      "time": 1583539200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145858,
      "time": 1583625600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139782,
      "time": 1583712000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133862,
      "time": 1583798400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140103,
      "time": 1583884800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136418,
      "time": 1583971200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150021,
      "time": 1584057600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138074,
      "time": 1584144000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138074,
      "time": 1584230400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136501,
      "time": 1584316800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013402,
      "time": 1584403200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133084,
      "time": 1584489600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123592,
      "time": 1584576000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012618,
      "time": 1584662400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012498,
      "time": 1584748800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012498,
      "time": 1584835200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124082,
      "time": 1584921600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125838,
      "time": 1585008000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127833,
      "time": 1585094400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127671,
      "time": 1585180800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129259,
      "time": 1585267200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126823,
      "time": 1585353600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126823,
      "time": 1585440000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125803,
      "time": 1585526400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125625,
      "time": 1585612800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012735,
      "time": 1585699200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126809,
      "time": 1585785600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129633,
      "time": 1585872000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130608,
      "time": 1585958400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130608,
      "time": 1586044800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129553,
      "time": 1586131200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01316,
      "time": 1586217600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132779,
      "time": 1586304000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132933,
      "time": 1586390400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134413,
      "time": 1586476800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135564,
      "time": 1586563200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135564,
      "time": 1586649600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135758,
      "time": 1586736000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136472,
      "time": 1586822400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136891,
      "time": 1586908800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133425,
      "time": 1586995200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013568,
      "time": 1587081600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135151,
      "time": 1587168000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135151,
      "time": 1587254400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135188,
      "time": 1587340800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132471,
      "time": 1587427200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129819,
      "time": 1587513600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131746,
      "time": 1587600000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133812,
      "time": 1587686400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134147,
      "time": 1587772800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134147,
      "time": 1587859200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134065,
      "time": 1587945600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134339,
      "time": 1588032000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135056,
      "time": 1588118400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136792,
      "time": 1588204800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134434,
      "time": 1588291200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132694,
      "time": 1588377600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132694,
      "time": 1588464000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013245,
      "time": 1588550400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013401,
      "time": 1588636800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135558,
      "time": 1588723200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134045,
      "time": 1588809600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135204,
      "time": 1588896000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136158,
      "time": 1588982400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136158,
      "time": 1589068800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136147,
      "time": 1589155200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135654,
      "time": 1589241600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135831,
      "time": 1589328000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135004,
      "time": 1589414400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136205,
      "time": 1589500800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136078,
      "time": 1589587200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136078,
      "time": 1589673600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135825,
      "time": 1589760000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013757,
      "time": 1589846400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137906,
      "time": 1589932800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140428,
      "time": 1590019200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140835,
      "time": 1590105600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139714,
      "time": 1590192000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139714,
      "time": 1590278400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139729,
      "time": 1590364800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139547,
      "time": 1590451200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141254,
      "time": 1590537600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141097,
      "time": 1590624000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141793,
      "time": 1590710400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142349,
      "time": 1590796800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142349,
      "time": 1590883200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142355,
      "time": 1590969600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144692,
      "time": 1591056000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145558,
      "time": 1591142400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0146115,
      "time": 1591228800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014473,
      "time": 1591315200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145572,
      "time": 1591401600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145572,
      "time": 1591488000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0146734,
      "time": 1591574400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0146779,
      "time": 1591660800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145737,
      "time": 1591747200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0146076,
      "time": 1591833600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142641,
      "time": 1591920000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143483,
      "time": 1592006400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143483,
      "time": 1592092800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143678,
      "time": 1592179200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143664,
      "time": 1592265600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143979,
      "time": 1592352000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01435,
      "time": 1592438400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143141,
      "time": 1592524800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014404,
      "time": 1592611200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014404,
      "time": 1592697600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143407,
      "time": 1592784000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144971,
      "time": 1592870400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145444,
      "time": 1592956800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143976,
      "time": 1593043200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144822,
      "time": 1593129600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143157,
      "time": 1593216000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143157,
      "time": 1593302400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014335,
      "time": 1593388800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142511,
      "time": 1593475200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140459,
      "time": 1593561600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141488,
      "time": 1593648000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141862,
      "time": 1593734400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140106,
      "time": 1593820800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140106,
      "time": 1593907200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140123,
      "time": 1593993600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139231,
      "time": 1594080000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139968,
      "time": 1594166400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140298,
      "time": 1594252800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141284,
      "time": 1594339200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141258,
      "time": 1594425600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141258,
      "time": 1594512000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141144,
      "time": 1594598400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014123,
      "time": 1594684800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140859,
      "time": 1594771200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140768,
      "time": 1594857600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139697,
      "time": 1594944000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139132,
      "time": 1595030400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139132,
      "time": 1595116800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139153,
      "time": 1595203200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140148,
      "time": 1595289600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141379,
      "time": 1595376000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140461,
      "time": 1595462400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140174,
      "time": 1595548800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139528,
      "time": 1595635200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139528,
      "time": 1595721600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139385,
      "time": 1595808000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139713,
      "time": 1595894400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137914,
      "time": 1595980800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013791,
      "time": 1596067200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136321,
      "time": 1596153600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134439,
      "time": 1596240000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134439,
      "time": 1596326400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134951,
      "time": 1596412800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136852,
      "time": 1596499200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136195,
      "time": 1596585600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013727,
      "time": 1596672000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136526,
      "time": 1596758400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135661,
      "time": 1596844800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135661,
      "time": 1596931200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135733,
      "time": 1597017600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135942,
      "time": 1597104000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136799,
      "time": 1597190400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135477,
      "time": 1597276800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137101,
      "time": 1597363200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137281,
      "time": 1597449600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137281,
      "time": 1597536000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137001,
      "time": 1597622400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135749,
      "time": 1597708800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136834,
      "time": 1597795200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136441,
      "time": 1597881600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135334,
      "time": 1597968000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133697,
      "time": 1598054400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133697,
      "time": 1598140800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133753,
      "time": 1598227200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133985,
      "time": 1598313600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132725,
      "time": 1598400000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132236,
      "time": 1598486400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01333,
      "time": 1598572800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013498,
      "time": 1598659200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013498,
      "time": 1598745600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134921,
      "time": 1598832000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135414,
      "time": 1598918400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013588,
      "time": 1599004800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132454,
      "time": 1599091200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132749,
      "time": 1599177600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132683,
      "time": 1599264000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132683,
      "time": 1599350400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132647,
      "time": 1599436800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132008,
      "time": 1599523200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013111,
      "time": 1599609600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132699,
      "time": 1599696000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132882,
      "time": 1599782400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013352,
      "time": 1599868800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013352,
      "time": 1599955200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133511,
      "time": 1600041600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132906,
      "time": 1600128000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132916,
      "time": 1600214400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013352,
      "time": 1600300800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133582,
      "time": 1600387200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132037,
      "time": 1600473600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132037,
      "time": 1600560000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132304,
      "time": 1600646400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131635,
      "time": 1600732800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131486,
      "time": 1600819200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130151,
      "time": 1600905600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129767,
      "time": 1600992000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127964,
      "time": 1601078400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127964,
      "time": 1601164800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127957,
      "time": 1601251200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126268,
      "time": 1601337600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126582,
      "time": 1601424000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128766,
      "time": 1601510400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129474,
      "time": 1601596800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127883,
      "time": 1601683200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127883,
      "time": 1601769600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127918,
      "time": 1601856000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127968,
      "time": 1601942400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127533,
      "time": 1602028800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128029,
      "time": 1602115200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129393,
      "time": 1602201600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130257,
      "time": 1602288000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130257,
      "time": 1602374400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130095,
      "time": 1602460800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129811,
      "time": 1602547200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129774,
      "time": 1602633600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128617,
      "time": 1602720000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012824,
      "time": 1602806400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128488,
      "time": 1602892800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128488,
      "time": 1602979200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128464,
      "time": 1603065600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128828,
      "time": 1603152000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129337,
      "time": 1603238400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130354,
      "time": 1603324800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130594,
      "time": 1603411200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131193,
      "time": 1603497600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131193,
      "time": 1603584000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131083,
      "time": 1603670400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130745,
      "time": 1603756800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012933,
      "time": 1603843200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126443,
      "time": 1603929600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126804,
      "time": 1604016000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125918,
      "time": 1604102400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125918,
      "time": 1604188800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125608,
      "time": 1604275200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124132,
      "time": 1604361600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126413,
      "time": 1604448000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128864,
      "time": 1604534400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130024,
      "time": 1604620800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129118,
      "time": 1604707200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129118,
      "time": 1604793600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128958,
      "time": 1604880000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131061,
      "time": 1604966400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130724,
      "time": 1605052800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129731,
      "time": 1605139200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129686,
      "time": 1605225600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129239,
      "time": 1605312000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129239,
      "time": 1605398400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129247,
      "time": 1605484800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131033,
      "time": 1605571200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131157,
      "time": 1605657600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131705,
      "time": 1605744000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131233,
      "time": 1605830400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131277,
      "time": 1605916800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131277,
      "time": 1606003200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131039,
      "time": 1606089600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131533,
      "time": 1606176000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132533,
      "time": 1606262400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132234,
      "time": 1606348800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132127,
      "time": 1606435200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131607,
      "time": 1606521600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131607,
      "time": 1606608000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131559,
      "time": 1606694400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130822,
      "time": 1606780800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131651,
      "time": 1606867200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133075,
      "time": 1606953600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134185,
      "time": 1607040000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134913,
      "time": 1607126400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134913,
      "time": 1607212800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134849,
      "time": 1607299200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135465,
      "time": 1607385600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136285,
      "time": 1607472000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135785,
      "time": 1607558400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136774,
      "time": 1607644800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136809,
      "time": 1607731200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136809,
      "time": 1607817600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136665,
      "time": 1607904000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135463,
      "time": 1607990400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136361,
      "time": 1608076800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136272,
      "time": 1608163200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136752,
      "time": 1608249600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136187,
      "time": 1608336000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136187,
      "time": 1608422400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135316,
      "time": 1608508800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133556,
      "time": 1608595200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131735,
      "time": 1608681600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133235,
      "time": 1608768000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135017,
      "time": 1608854400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135026,
      "time": 1608940800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135026,
      "time": 1609027200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134824,
      "time": 1609113600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135316,
      "time": 1609200000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135032,
      "time": 1609286400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134456,
      "time": 1609372800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135092,
      "time": 1609459200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135236,
      "time": 1609545600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135236,
      "time": 1609632000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135236,
      "time": 1609718400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013421,
      "time": 1609804800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134683,
      "time": 1609891200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134905,
      "time": 1609977600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134057,
      "time": 1610064000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134984,
      "time": 1610150400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134984,
      "time": 1610236800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134884,
      "time": 1610323200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133935,
      "time": 1610409600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01361,
      "time": 1610496000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135348,
      "time": 1610582400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136314,
      "time": 1610668800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136041,
      "time": 1610755200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136041,
      "time": 1610841600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135728,
      "time": 1610928000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135233,
      "time": 1611014400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013549,
      "time": 1611100800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136076,
      "time": 1611187200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135158,
      "time": 1611273600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132733,
      "time": 1611360000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132733,
      "time": 1611446400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132577,
      "time": 1611532800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132791,
      "time": 1611619200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133147,
      "time": 1611705600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131738,
      "time": 1611792000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131246,
      "time": 1611878400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131893,
      "time": 1611964800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131893,
      "time": 1612051200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131807,
      "time": 1612137600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131252,
      "time": 1612224000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131138,
      "time": 1612310400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131718,
      "time": 1612396800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132405,
      "time": 1612483200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133959,
      "time": 1612569600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133959,
      "time": 1612656000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013387,
      "time": 1612742400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013452,
      "time": 1612828800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135297,
      "time": 1612915200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135334,
      "time": 1613001600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135733,
      "time": 1613088000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135768,
      "time": 1613174400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135768,
      "time": 1613260800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135854,
      "time": 1613347200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136301,
      "time": 1613433600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135913,
      "time": 1613520000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135592,
      "time": 1613606400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135375,
      "time": 1613692800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134897,
      "time": 1613779200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134897,
      "time": 1613865600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134911,
      "time": 1613952000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134677,
      "time": 1614038400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134942,
      "time": 1614124800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013599,
      "time": 1614211200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133845,
      "time": 1614297600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134469,
      "time": 1614384000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134469,
      "time": 1614470400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134134,
      "time": 1614556800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134607,
      "time": 1614643200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135471,
      "time": 1614729600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135054,
      "time": 1614816000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134057,
      "time": 1614902400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134429,
      "time": 1614988800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134429,
      "time": 1615075200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134719,
      "time": 1615161600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134213,
      "time": 1615248000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135001,
      "time": 1615334400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135946,
      "time": 1615420800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136364,
      "time": 1615507200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013651,
      "time": 1615593600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013651,
      "time": 1615680000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136169,
      "time": 1615766400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137419,
      "time": 1615852800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137173,
      "time": 1615939200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135704,
      "time": 1616025600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134499,
      "time": 1616112000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134966,
      "time": 1616198400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134966,
      "time": 1616284800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134534,
      "time": 1616371200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133652,
      "time": 1616457600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130976,
      "time": 1616544000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130461,
      "time": 1616630400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131316,
      "time": 1616716800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132006,
      "time": 1616803200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132006,
      "time": 1616889600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132107,
      "time": 1616976000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132119,
      "time": 1617062400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131703,
      "time": 1617148800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132081,
      "time": 1617235200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131066,
      "time": 1617321600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130668,
      "time": 1617408000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130668,
      "time": 1617494400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130804,
      "time": 1617580800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130745,
      "time": 1617667200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129639,
      "time": 1617753600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129546,
      "time": 1617840000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130163,
      "time": 1617926400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129158,
      "time": 1618012800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129158,
      "time": 1618099200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129162,
      "time": 1618185600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129314,
      "time": 1618272000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131673,
      "time": 1618358400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131494,
      "time": 1618444800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131397,
      "time": 1618531200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131835,
      "time": 1618617600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131835,
      "time": 1618704000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131596,
      "time": 1618790400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131052,
      "time": 1618876800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013011,
      "time": 1618963200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130513,
      "time": 1619049600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132397,
      "time": 1619136000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013355,
      "time": 1619222400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013355,
      "time": 1619308800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133429,
      "time": 1619395200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133336,
      "time": 1619481600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133664,
      "time": 1619568000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134411,
      "time": 1619654400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133739,
      "time": 1619740800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132961,
      "time": 1619827200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132961,
      "time": 1619913600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132922,
      "time": 1620000000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133516,
      "time": 1620086400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133719,
      "time": 1620172800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133563,
      "time": 1620259200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013473,
      "time": 1620345600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135584,
      "time": 1620432000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135584,
      "time": 1620518400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135733,
      "time": 1620604800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134569,
      "time": 1620691200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134767,
      "time": 1620777600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134001,
      "time": 1620864000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135075,
      "time": 1620950400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135133,
      "time": 1621036800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135133,
      "time": 1621123200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135148,
      "time": 1621209600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135478,
      "time": 1621296000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135698,
      "time": 1621382400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135558,
      "time": 1621468800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136047,
      "time": 1621555200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135794,
      "time": 1621641600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135794,
      "time": 1621728000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135781,
      "time": 1621814400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136103,
      "time": 1621900800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136085,
      "time": 1621987200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135918,
      "time": 1622073600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01361,
      "time": 1622160000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136612,
      "time": 1622246400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136612,
      "time": 1622332800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136525,
      "time": 1622419200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136179,
      "time": 1622505600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013596,
      "time": 1622592000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136649,
      "time": 1622678400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013652,
      "time": 1622764800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137309,
      "time": 1622851200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137309,
      "time": 1622937600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013698,
      "time": 1623024000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137311,
      "time": 1623110400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138354,
      "time": 1623196800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138242,
      "time": 1623283200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139327,
      "time": 1623369600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138987,
      "time": 1623456000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138987,
      "time": 1623542400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01387,
      "time": 1623628800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138833,
      "time": 1623715200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138419,
      "time": 1623801600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137742,
      "time": 1623888000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138116,
      "time": 1623974400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137364,
      "time": 1624060800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137364,
      "time": 1624147200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01373,
      "time": 1624233600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136754,
      "time": 1624320000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137181,
      "time": 1624406400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137616,
      "time": 1624492800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138251,
      "time": 1624579200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138504,
      "time": 1624665600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138504,
      "time": 1624752000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138418,
      "time": 1624838400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138451,
      "time": 1624924800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137445,
      "time": 1625011200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136855,
      "time": 1625097600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136035,
      "time": 1625184000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136619,
      "time": 1625270400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136619,
      "time": 1625356800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136519,
      "time": 1625443200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136121,
      "time": 1625529600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134132,
      "time": 1625616000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133823,
      "time": 1625702400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133785,
      "time": 1625788800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134379,
      "time": 1625875200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134379,
      "time": 1625961600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134619,
      "time": 1626048000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134405,
      "time": 1626134400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134464,
      "time": 1626220800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134841,
      "time": 1626307200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134403,
      "time": 1626393600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134989,
      "time": 1626480000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134989,
      "time": 1626566400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134964,
      "time": 1626652800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133878,
      "time": 1626739200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134444,
      "time": 1626825600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135175,
      "time": 1626912000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135704,
      "time": 1626998400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135488,
      "time": 1627084800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135488,
      "time": 1627171200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135663,
      "time": 1627257600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135659,
      "time": 1627344000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135623,
      "time": 1627430400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136119,
      "time": 1627516800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136635,
      "time": 1627603200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136705,
      "time": 1627689600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136705,
      "time": 1627776000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136756,
      "time": 1627862400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136999,
      "time": 1627948800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137034,
      "time": 1628035200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136586,
      "time": 1628121600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013671,
      "time": 1628208000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013601,
      "time": 1628294400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013601,
      "time": 1628380800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135984,
      "time": 1628467200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135768,
      "time": 1628553600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135227,
      "time": 1628640000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136172,
      "time": 1628726400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135918,
      "time": 1628812800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136406,
      "time": 1628899200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136406,
      "time": 1628985600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136534,
      "time": 1629072000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136394,
      "time": 1629158400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135801,
      "time": 1629244800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135357,
      "time": 1629331200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134619,
      "time": 1629417600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134628,
      "time": 1629504000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134628,
      "time": 1629590400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134722,
      "time": 1629676800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134934,
      "time": 1629763200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135508,
      "time": 1629849600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135448,
      "time": 1629936000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134579,
      "time": 1630022400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135967,
      "time": 1630108800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135967,
      "time": 1630195200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136173,
      "time": 1630281600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136107,
      "time": 1630368000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136432,
      "time": 1630454400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136956,
      "time": 1630540800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013689,
      "time": 1630627200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137289,
      "time": 1630713600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137289,
      "time": 1630800000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137348,
      "time": 1630886400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013698,
      "time": 1630972800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136235,
      "time": 1631059200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136463,
      "time": 1631145600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013714,
      "time": 1631232000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136636,
      "time": 1631318400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136636,
      "time": 1631404800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136762,
      "time": 1631491200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137597,
      "time": 1631577600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137147,
      "time": 1631664000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138359,
      "time": 1631750400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137939,
      "time": 1631836800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137153,
      "time": 1631923200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137153,
      "time": 1632009600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137282,
      "time": 1632096000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136249,
      "time": 1632182400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136918,
      "time": 1632268800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137079,
      "time": 1632355200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137523,
      "time": 1632441600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137552,
      "time": 1632528000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137552,
      "time": 1632614400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137537,
      "time": 1632700800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137704,
      "time": 1632787200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137224,
      "time": 1632873600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137212,
      "time": 1632960000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137457,
      "time": 1633046400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137589,
      "time": 1633132800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137589,
      "time": 1633219200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137575,
      "time": 1633305600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137907,
      "time": 1633392000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138263,
      "time": 1633478400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138065,
      "time": 1633564800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013924,
      "time": 1633651200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139119,
      "time": 1633737600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139119,
      "time": 1633824000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139234,
      "time": 1633910400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139082,
      "time": 1633996800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139117,
      "time": 1634083200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013888,
      "time": 1634169600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140051,
      "time": 1634256000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140823,
      "time": 1634342400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140823,
      "time": 1634428800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140713,
      "time": 1634515200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140404,
      "time": 1634601600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141122,
      "time": 1634688000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014118,
      "time": 1634774400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140545,
      "time": 1634860800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142202,
      "time": 1634947200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142202,
      "time": 1635033600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142071,
      "time": 1635120000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143182,
      "time": 1635206400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143908,
      "time": 1635292800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141556,
      "time": 1635379200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142486,
      "time": 1635465600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140964,
      "time": 1635552000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140964,
      "time": 1635638400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140937,
      "time": 1635724800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139619,
      "time": 1635811200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139586,
      "time": 1635897600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139402,
      "time": 1635984000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139976,
      "time": 1636070400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140551,
      "time": 1636156800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140551,
      "time": 1636243200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140505,
      "time": 1636329600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140334,
      "time": 1636416000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141358,
      "time": 1636502400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140301,
      "time": 1636588800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139667,
      "time": 1636675200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137175,
      "time": 1636761600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137175,
      "time": 1636848000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137506,
      "time": 1636934400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137895,
      "time": 1637020800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136738,
      "time": 1637107200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137763,
      "time": 1637193600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136787,
      "time": 1637280000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013602,
      "time": 1637366400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013602,
      "time": 1637452800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136088,
      "time": 1637539200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133324,
      "time": 1637625600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134578,
      "time": 1637712000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013339,
      "time": 1637798400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134114,
      "time": 1637884800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132354,
      "time": 1637971200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132354,
      "time": 1638057600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132724,
      "time": 1638144000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134275,
      "time": 1638230400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134916,
      "time": 1638316800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134624,
      "time": 1638403200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135769,
      "time": 1638489600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135184,
      "time": 1638576000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135184,
      "time": 1638662400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135525,
      "time": 1638748800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134439,
      "time": 1638835200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013509,
      "time": 1638921600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135942,
      "time": 1639008000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135705,
      "time": 1639094400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136331,
      "time": 1639180800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136331,
      "time": 1639267200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136266,
      "time": 1639353600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013606,
      "time": 1639440000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135447,
      "time": 1639526400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135809,
      "time": 1639612800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135758,
      "time": 1639699200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134818,
      "time": 1639785600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134818,
      "time": 1639872000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134987,
      "time": 1639958400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134955,
      "time": 1640044800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013531,
      "time": 1640131200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135784,
      "time": 1640217600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136363,
      "time": 1640304000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135754,
      "time": 1640390400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135754,
      "time": 1640476800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136232,
      "time": 1640563200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136251,
      "time": 1640649600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135681,
      "time": 1640736000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013519,
      "time": 1640822400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134108,
      "time": 1640908800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133705,
      "time": 1640995200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133705,
      "time": 1641081600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133705,
      "time": 1641168000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134271,
      "time": 1641254400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132806,
      "time": 1641340800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130384,
      "time": 1641427200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013091,
      "time": 1641513600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132059,
      "time": 1641600000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132059,
      "time": 1641686400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132545,
      "time": 1641772800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013359,
      "time": 1641859200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134249,
      "time": 1641945600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0134049,
      "time": 1642032000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131006,
      "time": 1642118400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131173,
      "time": 1642204800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131173,
      "time": 1642291200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013099,
      "time": 1642377600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131411,
      "time": 1642464000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130135,
      "time": 1642550400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130969,
      "time": 1642636800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130243,
      "time": 1642723200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128882,
      "time": 1642809600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128882,
      "time": 1642896000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129125,
      "time": 1642982400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127083,
      "time": 1643068800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126951,
      "time": 1643155200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126208,
      "time": 1643241600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128029,
      "time": 1643328000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127887,
      "time": 1643414400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127887,
      "time": 1643500800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127887,
      "time": 1643587200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129293,
      "time": 1643673600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130333,
      "time": 1643760000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013122,
      "time": 1643846400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130812,
      "time": 1643932800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132027,
      "time": 1644019200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132027,
      "time": 1644105600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131619,
      "time": 1644192000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132544,
      "time": 1644278400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133208,
      "time": 1644364800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133799,
      "time": 1644451200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133223,
      "time": 1644537600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129388,
      "time": 1644624000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129388,
      "time": 1644710400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012916,
      "time": 1644796800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130684,
      "time": 1644883200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132436,
      "time": 1644969600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013321,
      "time": 1645056000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131296,
      "time": 1645142400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012928,
      "time": 1645228800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012928,
      "time": 1645315200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128102,
      "time": 1645401600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124349,
      "time": 1645488000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126832,
      "time": 1645574400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123175,
      "time": 1645660800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0117716,
      "time": 1645747200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119297,
      "time": 1645833600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119297,
      "time": 1645920000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119188,
      "time": 1646006400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00949829,
      "time": 1646092800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00920163,
      "time": 1646179200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00973226,
      "time": 1646265600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00913148,
      "time": 1646352000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00872829,
      "time": 1646438400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00872829,
      "time": 1646524800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00876063,
      "time": 1646611200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00784314,
      "time": 1646697600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00769231,
      "time": 1646784000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00735294,
      "time": 1646870400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00749064,
      "time": 1646956800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0075188,
      "time": 1647043200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0075188,
      "time": 1647129600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0075188,
      "time": 1647216000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00833333,
      "time": 1647302400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00869565,
      "time": 1647388800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103627,
      "time": 1647475200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00969697,
      "time": 1647561600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00938967,
      "time": 1647648000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00938967,
      "time": 1647734400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0098912,
      "time": 1647820800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00937647,
      "time": 1647907200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00943396,
      "time": 1647993600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103359,
      "time": 1648080000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00977995,
      "time": 1648166400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00980392,
      "time": 1648252800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00980392,
      "time": 1648339200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00991326,
      "time": 1648425600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103627,
      "time": 1648512000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011236,
      "time": 1648598400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011976,
      "time": 1648684800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122324,
      "time": 1648771200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0116618,
      "time": 1648857600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0116618,
      "time": 1648944000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0118694,
      "time": 1649030400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119403,
      "time": 1649116800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119048,
      "time": 1649203200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121766,
      "time": 1649289600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126183,
      "time": 1649376000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124611,
      "time": 1649462400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124611,
      "time": 1649548800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0118343,
      "time": 1649635200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011976,
      "time": 1649721600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011713,
      "time": 1649808000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121322,
      "time": 1649894400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121029,
      "time": 1649980800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123839,
      "time": 1650067200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123839,
      "time": 1650153600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012012,
      "time": 1650240000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123267,
      "time": 1650326400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123457,
      "time": 1650412800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0120809,
      "time": 1650499200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123648,
      "time": 1650585600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129241,
      "time": 1650672000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129241,
      "time": 1650758400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129241,
      "time": 1650844800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013197,
      "time": 1650931200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132231,
      "time": 1651017600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135364,
      "time": 1651104000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137457,
      "time": 1651190400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140154,
      "time": 1651276800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140154,
      "time": 1651363200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136333,
      "time": 1651449600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141643,
      "time": 1651536000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014652,
      "time": 1651622400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151229,
      "time": 1651708800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154261,
      "time": 1651795200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144928,
      "time": 1651881600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144928,
      "time": 1651968000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143885,
      "time": 1652054400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143113,
      "time": 1652140800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143113,
      "time": 1652227200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0149813,
      "time": 1652313600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153551,
      "time": 1652400000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1652486400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1652572800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1652659200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154739,
      "time": 1652745600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153846,
      "time": 1652832000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155642,
      "time": 1652918400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160966,
      "time": 1653004800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1653091200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1653177600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016,
      "time": 1653264000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0170721,
      "time": 1653350400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172414,
      "time": 1653436800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164069,
      "time": 1653523200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155642,
      "time": 1653609600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1653696000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1653782400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0150376,
      "time": 1653868800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015625,
      "time": 1653955200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159363,
      "time": 1654041600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015748,
      "time": 1654128000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015748,
      "time": 1654214400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157828,
      "time": 1654300800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157828,
      "time": 1654387200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158103,
      "time": 1654473600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162933,
      "time": 1654560000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161943,
      "time": 1654646400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163961,
      "time": 1654732800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172414,
      "time": 1654819200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0171674,
      "time": 1654905600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0171674,
      "time": 1654992000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0171674,
      "time": 1655078400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017316,
      "time": 1655164800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0171306,
      "time": 1655251200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0174672,
      "time": 1655337600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017094,
      "time": 1655424000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0173913,
      "time": 1655510400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0173913,
      "time": 1655596800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0176211,
      "time": 1655683200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0176835,
      "time": 1655769600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0176835,
      "time": 1655856000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0181818,
      "time": 1655942400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0183486,
      "time": 1656028800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0184502,
      "time": 1656115200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0184502,
      "time": 1656201600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0187266,
      "time": 1656288000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0188235,
      "time": 1656374400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0183486,
      "time": 1656460800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0192308,
      "time": 1656547200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0182232,
      "time": 1656633600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0178571,
      "time": 1656720000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0178571,
      "time": 1656806400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0185185,
      "time": 1656892800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0175439,
      "time": 1656979200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166667,
      "time": 1657065600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157356,
      "time": 1657152000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158541,
      "time": 1657238400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153846,
      "time": 1657324800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153846,
      "time": 1657411200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154083,
      "time": 1657497600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0153846,
      "time": 1657584000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017116,
      "time": 1657670400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0171013,
      "time": 1657756800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01716,
      "time": 1657843200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0175439,
      "time": 1657929600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0175439,
      "time": 1658016000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0175439,
      "time": 1658102400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017316,
      "time": 1658188800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0176991,
      "time": 1658275200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0178571,
      "time": 1658361600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172414,
      "time": 1658448000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172043,
      "time": 1658534400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172043,
      "time": 1658620800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172043,
      "time": 1658707200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017094,
      "time": 1658793600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016632,
      "time": 1658880000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0168421,
      "time": 1658966400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016,
      "time": 1659052800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160643,
      "time": 1659139200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160643,
      "time": 1659225600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160643,
      "time": 1659312000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154739,
      "time": 1659398400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164406,
      "time": 1659484800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162311,
      "time": 1659571200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165975,
      "time": 1659657600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165221,
      "time": 1659744000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165221,
      "time": 1659830400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165221,
      "time": 1659916800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161616,
      "time": 1660003200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165358,
      "time": 1660089600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660176000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164948,
      "time": 1660262400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660348800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660435200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660521600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660608000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1660694400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1660780800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166667,
      "time": 1660867200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0168067,
      "time": 1660953600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0168067,
      "time": 1661040000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0168067,
      "time": 1661126400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016632,
      "time": 1661212800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165975,
      "time": 1661299200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0167154,
      "time": 1661385600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165631,
      "time": 1661472000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164271,
      "time": 1661558400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164271,
      "time": 1661644800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165837,
      "time": 1661731200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161943,
      "time": 1661817600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166667,
      "time": 1661904000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016632,
      "time": 1661990400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166085,
      "time": 1662076800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165906,
      "time": 1662163200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165906,
      "time": 1662249600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166085,
      "time": 1662336000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163908,
      "time": 1662422400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163199,
      "time": 1662508800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160038,
      "time": 1662595200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1662681600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1662768000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1662854400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016072,
      "time": 1662940800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166472,
      "time": 1663027200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016146,
      "time": 1663113600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0167434,
      "time": 1663200000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0167715,
      "time": 1663286400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1663372800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1663459200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155352,
      "time": 1663545600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166459,
      "time": 1663632000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161878,
      "time": 1663718400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162338,
      "time": 1663804800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1663891200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172786,
      "time": 1663977600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172786,
      "time": 1664064000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0174672,
      "time": 1664150400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017094,
      "time": 1664236800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0169779,
      "time": 1664323200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0172712,
      "time": 1664409600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0173913,
      "time": 1664496000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166113,
      "time": 1664582400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166113,
      "time": 1664668800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165975,
      "time": 1664755200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.017234,
      "time": 1664841600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016942,
      "time": 1664928000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164609,
      "time": 1665014400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165221,
      "time": 1665100800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160385,
      "time": 1665187200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160385,
      "time": 1665273600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0155352,
      "time": 1665360000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158265,
      "time": 1665446400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0152672,
      "time": 1665532800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0156924,
      "time": 1665619200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015456,
      "time": 1665705600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159617,
      "time": 1665792000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159617,
      "time": 1665878400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159617,
      "time": 1665964800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016116,
      "time": 1666051200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162602,
      "time": 1666137600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163934,
      "time": 1666224000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162206,
      "time": 1666310400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162206,
      "time": 1666396800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162206,
      "time": 1666483200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162206,
      "time": 1666569600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163265,
      "time": 1666656000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160643,
      "time": 1666742400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163199,
      "time": 1666828800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163066,
      "time": 1666915200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162536,
      "time": 1667001600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162536,
      "time": 1667088000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0162536,
      "time": 1667174400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016116,
      "time": 1667260800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0157791,
      "time": 1667347200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163934,
      "time": 1667433600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0160385,
      "time": 1667520000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1667606400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1667692800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1667779200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0158228,
      "time": 1667865600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164002,
      "time": 1667952000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163934,
      "time": 1668038400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164609,
      "time": 1668124800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164541,
      "time": 1668211200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164541,
      "time": 1668297600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016787,
      "time": 1668384000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016787,
      "time": 1668470400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1668556800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164541,
      "time": 1668643200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165563,
      "time": 1668729600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164339,
      "time": 1668816000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164339,
      "time": 1668902400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166472,
      "time": 1668988800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164853,
      "time": 1669075200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016484,
      "time": 1669161600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164474,
      "time": 1669248000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165659,
      "time": 1669334400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1669420800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165289,
      "time": 1669507200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0166472,
      "time": 1669593600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164042,
      "time": 1669680000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0164352,
      "time": 1669766400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163867,
      "time": 1669852800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0163359,
      "time": 1669939200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016,
      "time": 1670025600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016,
      "time": 1670112000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165153,
      "time": 1670198400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165153,
      "time": 1670284800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0165153,
      "time": 1670371200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.016129,
      "time": 1670457600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0161108,
      "time": 1670544000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159962,
      "time": 1670630400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159962,
      "time": 1670716800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159962,
      "time": 1670803200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0159591,
      "time": 1670889600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015819,
      "time": 1670976000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.015444,
      "time": 1671062400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154679,
      "time": 1671148800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154143,
      "time": 1671235200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154143,
      "time": 1671321600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0154143,
      "time": 1671408000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143369,
      "time": 1671494400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0139373,
      "time": 1671580800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140105,
      "time": 1671667200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014652,
      "time": 1671753600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144665,
      "time": 1671840000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144665,
      "time": 1671926400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142349,
      "time": 1672012800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0146274,
      "time": 1672099200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142857,
      "time": 1672185600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137457,
      "time": 1672272000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133333,
      "time": 1672358400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135593,
      "time": 1672444800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135593,
      "time": 1672531200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135593,
      "time": 1672617600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140845,
      "time": 1672704000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136893,
      "time": 1672790400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013986,
      "time": 1672876800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01386,
      "time": 1672963200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137931,
      "time": 1673049600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137931,
      "time": 1673136000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137931,
      "time": 1673222400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143031,
      "time": 1673308800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143524,
      "time": 1673395200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142248,
      "time": 1673481600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0147525,
      "time": 1673568000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144928,
      "time": 1673654400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144928,
      "time": 1673740800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0151515,
      "time": 1673827200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145455,
      "time": 1673913600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145985,
      "time": 1674000000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0145455,
      "time": 1674086400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144092,
      "time": 1674172800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144665,
      "time": 1674259200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144665,
      "time": 1674345600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014652,
      "time": 1674432000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143113,
      "time": 1674518400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143988,
      "time": 1674604800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0144446,
      "time": 1674691200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143885,
      "time": 1674777600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143364,
      "time": 1674864000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143364,
      "time": 1674950400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141388,
      "time": 1675036800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0143031,
      "time": 1675123200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141673,
      "time": 1675209600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.014299,
      "time": 1675296000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0142725,
      "time": 1675382400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141543,
      "time": 1675468800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141543,
      "time": 1675555200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0141493,
      "time": 1675641600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013986,
      "time": 1675728000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0140795,
      "time": 1675814400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0138793,
      "time": 1675900800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0137221,
      "time": 1675987200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135492,
      "time": 1676073600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135492,
      "time": 1676160000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013678,
      "time": 1676246400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136612,
      "time": 1676332800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.013587,
      "time": 1676419200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135135,
      "time": 1676505600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133842,
      "time": 1676592000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135777,
      "time": 1676678400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0135777,
      "time": 1676764800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136426,
      "time": 1676851200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0136986,
      "time": 1676937600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133958,
      "time": 1677024000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133511,
      "time": 1677110400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132626,
      "time": 1677196800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131553,
      "time": 1677283200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131553,
      "time": 1677369600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131553,
      "time": 1677456000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133958,
      "time": 1677542400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133245,
      "time": 1677628800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132864,
      "time": 1677715200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132406,
      "time": 1677801600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01321,
      "time": 1677888000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01321,
      "time": 1677974400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132626,
      "time": 1678060800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132626,
      "time": 1678147200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132275,
      "time": 1678233600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131492,
      "time": 1678320000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131839,
      "time": 1678406400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131234,
      "time": 1678492800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131234,
      "time": 1678579200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131234,
      "time": 1678665600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132363,
      "time": 1678752000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0132013,
      "time": 1678838400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131406,
      "time": 1678924800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130719,
      "time": 1679011200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129938,
      "time": 1679097600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129938,
      "time": 1679184000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129938,
      "time": 1679270400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129032,
      "time": 1679356800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012945,
      "time": 1679443200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129997,
      "time": 1679529600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131579,
      "time": 1679616000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01294,
      "time": 1679702400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01294,
      "time": 1679788800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.01294,
      "time": 1679875200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130659,
      "time": 1679961600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0130617,
      "time": 1680048000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129324,
      "time": 1680134400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129408,
      "time": 1680220800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128205,
      "time": 1680307200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128205,
      "time": 1680393600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128205,
      "time": 1680480000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127146,
      "time": 1680566400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126103,
      "time": 1680652800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124688,
      "time": 1680739200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123153,
      "time": 1680825600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123305,
      "time": 1680912000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123305,
      "time": 1680998400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123305,
      "time": 1681084800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122459,
      "time": 1681171200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123305,
      "time": 1681257600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121877,
      "time": 1681344000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122399,
      "time": 1681430400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121544,
      "time": 1681516800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121544,
      "time": 1681603200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122624,
      "time": 1681689600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121877,
      "time": 1681776000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122249,
      "time": 1681862400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122399,
      "time": 1681948800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122249,
      "time": 1682035200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122775,
      "time": 1682121600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122775,
      "time": 1682208000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122775,
      "time": 1682294400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122707,
      "time": 1682380800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122399,
      "time": 1682467200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122249,
      "time": 1682553600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122175,
      "time": 1682640000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125039,
      "time": 1682726400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125039,
      "time": 1682812800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124301,
      "time": 1682899200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123916,
      "time": 1682985600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124828,
      "time": 1683072000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125786,
      "time": 1683158400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0127146,
      "time": 1683244800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128518,
      "time": 1683331200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128518,
      "time": 1683417600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128518,
      "time": 1683504000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128659,
      "time": 1683590400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128205,
      "time": 1683676800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0131389,
      "time": 1683763200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012987,
      "time": 1683849600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128733,
      "time": 1683936000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0128733,
      "time": 1684022400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0129266,
      "time": 1684108800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125392,
      "time": 1684195200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124239,
      "time": 1684281600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0125392,
      "time": 1684368000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124378,
      "time": 1684454400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124844,
      "time": 1684540800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124844,
      "time": 1684627200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124844,
      "time": 1684713600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124224,
      "time": 1684800000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012475,
      "time": 1684886400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124844,
      "time": 1684972800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124961,
      "time": 1685059200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126582,
      "time": 1685145600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126582,
      "time": 1685232000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0126582,
      "time": 1685318400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124611,
      "time": 1685404800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0133005,
      "time": 1685491200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122624,
      "time": 1685577600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123457,
      "time": 1685664000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123762,
      "time": 1685750400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123762,
      "time": 1685836800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0123762,
      "time": 1685923200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0124069,
      "time": 1686009600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122926,
      "time": 1686096000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0122624,
      "time": 1686182400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0121936,
      "time": 1686268800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0120882,
      "time": 1686355200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0120882,
      "time": 1686441600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0120882,
      "time": 1686528000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119225,
      "time": 1686614400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119119,
      "time": 1686700800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119048,
      "time": 1686787200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119796,
      "time": 1686873600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119225,
      "time": 1686960000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119225,
      "time": 1687046400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011976,
      "time": 1687132800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119261,
      "time": 1687219200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119261,
      "time": 1687305600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119546,
      "time": 1687392000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.012348,
      "time": 1687478400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119546,
      "time": 1687564800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119546,
      "time": 1687651200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0119546,
      "time": 1687737600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0118469,
      "time": 1687824000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011713,
      "time": 1687910400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0116279,
      "time": 1687996800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0115128,
      "time": 1688083200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112581,
      "time": 1688169600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112581,
      "time": 1688256000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113701,
      "time": 1688342400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111732,
      "time": 1688428800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010989,
      "time": 1688515200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109589,
      "time": 1688601600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109589,
      "time": 1688688000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109577,
      "time": 1688774400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109577,
      "time": 1688860800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109577,
      "time": 1688947200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109769,
      "time": 1689033600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110497,
      "time": 1689120000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110497,
      "time": 1689206400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110957,
      "time": 1689292800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110803,
      "time": 1689379200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110803,
      "time": 1689465600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110803,
      "time": 1689552000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110369,
      "time": 1689638400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010989,
      "time": 1689724800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108755,
      "time": 1689811200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110988,
      "time": 1689897600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010989,
      "time": 1689984000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010989,
      "time": 1690070400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110497,
      "time": 1690156800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110558,
      "time": 1690243200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110865,
      "time": 1690329600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111111,
      "time": 1690416000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110254,
      "time": 1690502400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108625,
      "time": 1690588800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108625,
      "time": 1690675200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108625,
      "time": 1690761600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109111,
      "time": 1690848000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108225,
      "time": 1690934400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106326,
      "time": 1691020800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105263,
      "time": 1691107200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104302,
      "time": 1691193600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104302,
      "time": 1691280000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104302,
      "time": 1691366400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104439,
      "time": 1691452800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102875,
      "time": 1691539200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103226,
      "time": 1691625600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103066,
      "time": 1691712000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0100455,
      "time": 1691798400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0100455,
      "time": 1691884800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0100005,
      "time": 1691971200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0101523,
      "time": 1692057600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010101,
      "time": 1692144000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102722,
      "time": 1692230400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010582,
      "time": 1692316800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010627,
      "time": 1692403200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010627,
      "time": 1692489600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105042,
      "time": 1692576000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106952,
      "time": 1692662400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010582,
      "time": 1692748800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106383,
      "time": 1692835200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010582,
      "time": 1692921600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105263,
      "time": 1693008000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105263,
      "time": 1693094400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104712,
      "time": 1693180800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010582,
      "time": 1693267200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104794,
      "time": 1693353600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103842,
      "time": 1693440000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104302,
      "time": 1693526400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103729,
      "time": 1693612800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103729,
      "time": 1693699200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103729,
      "time": 1693785600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103896,
      "time": 1693872000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103338,
      "time": 1693958400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102249,
      "time": 1694044800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0101523,
      "time": 1694131200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102118,
      "time": 1694217600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102118,
      "time": 1694304000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102302,
      "time": 1694390400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105208,
      "time": 1694476800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104167,
      "time": 1694563200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103915,
      "time": 1694649600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104712,
      "time": 1694736000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103306,
      "time": 1694822400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103306,
      "time": 1694908800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103306,
      "time": 1694995200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104221,
      "time": 1695081600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104167,
      "time": 1695168000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010414,
      "time": 1695254400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105042,
      "time": 1695340800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103842,
      "time": 1695427200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103842,
      "time": 1695513600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103842,
      "time": 1695600000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105441,
      "time": 1695686400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105042,
      "time": 1695772800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103013,
      "time": 1695859200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103466,
      "time": 1695945600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102041,
      "time": 1696032000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102041,
      "time": 1696118400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102041,
      "time": 1696204800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0101215,
      "time": 1696291200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00990099,
      "time": 1696377600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0100503,
      "time": 1696464000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00998752,
      "time": 1696550400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00990099,
      "time": 1696636800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00990099,
      "time": 1696723200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00990099,
      "time": 1696809600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0100756,
      "time": 1696896000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00997009,
      "time": 1696982400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.00995025,
      "time": 1697068800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102328,
      "time": 1697155200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102354,
      "time": 1697241600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102354,
      "time": 1697328000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102354,
      "time": 1697414400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102722,
      "time": 1697500800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0102015,
      "time": 1697587200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0101926,
      "time": 1697673600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0103966,
      "time": 1697760000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104767,
      "time": 1697846400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104767,
      "time": 1697932800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0104767,
      "time": 1698019200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010582,
      "time": 1698105600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010698,
      "time": 1698192000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106383,
      "time": 1698278400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106781,
      "time": 1698364800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106157,
      "time": 1698451200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106157,
      "time": 1698537600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106157,
      "time": 1698624000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010805,
      "time": 1698710400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107152,
      "time": 1698796800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107991,
      "time": 1698883200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010721,
      "time": 1698969600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107701,
      "time": 1699056000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107701,
      "time": 1699142400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107701,
      "time": 1699228800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107933,
      "time": 1699315200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108578,
      "time": 1699401600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108873,
      "time": 1699488000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109081,
      "time": 1699574400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108372,
      "time": 1699660800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108372,
      "time": 1699747200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108372,
      "time": 1699833600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108796,
      "time": 1699920000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110467,
      "time": 1700006400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111794,
      "time": 1700092800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111919,
      "time": 1700179200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111449,
      "time": 1700265600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111449,
      "time": 1700352000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111449,
      "time": 1700438400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112931,
      "time": 1700524800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113321,
      "time": 1700611200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113122,
      "time": 1700697600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113282,
      "time": 1700784000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111982,
      "time": 1700870400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111982,
      "time": 1700956800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111982,
      "time": 1701043200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112265,
      "time": 1701129600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112518,
      "time": 1701216000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011274,
      "time": 1701302400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111142,
      "time": 1701388800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109619,
      "time": 1701475200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109619,
      "time": 1701561600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109619,
      "time": 1701648000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010929,
      "time": 1701734400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110849,
      "time": 1701820800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107642,
      "time": 1701907200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108196,
      "time": 1701993600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108519,
      "time": 1702080000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108519,
      "time": 1702166400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108519,
      "time": 1702252800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109906,
      "time": 1702339200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110742,
      "time": 1702425600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111919,
      "time": 1702512000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111748,
      "time": 1702598400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110734,
      "time": 1702684800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110734,
      "time": 1702771200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110314,
      "time": 1702857600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110839,
      "time": 1702944000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110464,
      "time": 1703030400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010998,
      "time": 1703116800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108751,
      "time": 1703203200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108318,
      "time": 1703289600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108318,
      "time": 1703376000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108318,
      "time": 1703462400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108318,
      "time": 1703548800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108318,
      "time": 1703635200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010914,
      "time": 1703721600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112994,
      "time": 1703808000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111767,
      "time": 1703894400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111767,
      "time": 1703980800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111767,
      "time": 1704067200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111767,
      "time": 1704153600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109799,
      "time": 1704240000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109117,
      "time": 1704326400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010951,
      "time": 1704412800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109966,
      "time": 1704499200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109966,
      "time": 1704585600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109966,
      "time": 1704672000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109879,
      "time": 1704758400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111456,
      "time": 1704844800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111583,
      "time": 1704931200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112733,
      "time": 1705017600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113139,
      "time": 1705104000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113139,
      "time": 1705190400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113139,
      "time": 1705276800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113818,
      "time": 1705363200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113244,
      "time": 1705449600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113149,
      "time": 1705536000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011187,
      "time": 1705622400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113694,
      "time": 1705708800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113694,
      "time": 1705795200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113694,
      "time": 1705881600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113578,
      "time": 1705968000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112707,
      "time": 1706054400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112594,
      "time": 1706140800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112164,
      "time": 1706227200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111275,
      "time": 1706313600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111275,
      "time": 1706400000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111275,
      "time": 1706486400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112042,
      "time": 1706572800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111416,
      "time": 1706659200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111291,
      "time": 1706745600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110677,
      "time": 1706832000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110201,
      "time": 1706918400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110201,
      "time": 1707004800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110201,
      "time": 1707091200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110341,
      "time": 1707177600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110284,
      "time": 1707264000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109559,
      "time": 1707350400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109744,
      "time": 1707436800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109709,
      "time": 1707523200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109709,
      "time": 1707609600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109709,
      "time": 1707696000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109623,
      "time": 1707782400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109535,
      "time": 1707868800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109195,
      "time": 1707955200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108183,
      "time": 1708041600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108245,
      "time": 1708128000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108245,
      "time": 1708214400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108245,
      "time": 1708300800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108067,
      "time": 1708387200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010836,
      "time": 1708473600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108265,
      "time": 1708560000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107527,
      "time": 1708646400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105411,
      "time": 1708732800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105411,
      "time": 1708819200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0105411,
      "time": 1708905600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108187,
      "time": 1708992000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108653,
      "time": 1709078400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109506,
      "time": 1709164800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109649,
      "time": 1709251200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010901,
      "time": 1709337600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010901,
      "time": 1709424000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010901,
      "time": 1709510400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010933,
      "time": 1709596800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110037,
      "time": 1709683200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110166,
      "time": 1709769600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110329,
      "time": 1709856000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109803,
      "time": 1709942400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109803,
      "time": 1710028800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109803,
      "time": 1710115200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110001,
      "time": 1710201600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108995,
      "time": 1710288000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109469,
      "time": 1710374400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109256,
      "time": 1710460800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108079,
      "time": 1710547200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108079,
      "time": 1710633600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108079,
      "time": 1710720000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109027,
      "time": 1710806400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108138,
      "time": 1710892800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108093,
      "time": 1710979200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108873,
      "time": 1711065600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108415,
      "time": 1711152000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108415,
      "time": 1711238400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108415,
      "time": 1711324800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107643,
      "time": 1711411200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108137,
      "time": 1711497600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108164,
      "time": 1711584000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108019,
      "time": 1711670400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108153,
      "time": 1711756800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108153,
      "time": 1711843200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108153,
      "time": 1711929600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010817,
      "time": 1712016000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108137,
      "time": 1712102400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108325,
      "time": 1712188800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108401,
      "time": 1712275200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107998,
      "time": 1712361600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107998,
      "time": 1712448000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107998,
      "time": 1712534400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108196,
      "time": 1712620800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107643,
      "time": 1712707200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107181,
      "time": 1712793600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107208,
      "time": 1712880000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107181,
      "time": 1712966400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107181,
      "time": 1713052800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107181,
      "time": 1713139200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106944,
      "time": 1713225600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106214,
      "time": 1713312000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106132,
      "time": 1713398400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106405,
      "time": 1713484800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107401,
      "time": 1713571200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107401,
      "time": 1713657600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107401,
      "time": 1713744000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106724,
      "time": 1713830400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107287,
      "time": 1713916800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108329,
      "time": 1714003200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108489,
      "time": 1714089600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108838,
      "time": 1714176000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108838,
      "time": 1714262400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108838,
      "time": 1714348800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.010719,
      "time": 1714435200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107009,
      "time": 1714521600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0106581,
      "time": 1714608000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109627,
      "time": 1714694400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109319,
      "time": 1714780800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109319,
      "time": 1714867200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109319,
      "time": 1714953600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109507,
      "time": 1715040000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109431,
      "time": 1715126400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109009,
      "time": 1715212800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0108037,
      "time": 1715299200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107882,
      "time": 1715385600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107882,
      "time": 1715472000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0107882,
      "time": 1715558400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109184,
      "time": 1715644800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109488,
      "time": 1715731200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109663,
      "time": 1715817600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110054,
      "time": 1715904000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109896,
      "time": 1715990400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109896,
      "time": 1716076800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109896,
      "time": 1716163200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109896,
      "time": 1716249600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110731,
      "time": 1716336000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110909,
      "time": 1716422400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0109141,
      "time": 1716508800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111607,
      "time": 1716595200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111607,
      "time": 1716681600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111607,
      "time": 1716768000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112402,
      "time": 1716854400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112899,
      "time": 1716940800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111657,
      "time": 1717027200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110803,
      "time": 1717113600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110644,
      "time": 1717200000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110644,
      "time": 1717286400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0110644,
      "time": 1717372800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0111944,
      "time": 1717459200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011255,
      "time": 1717545600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112292,
      "time": 1717632000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112256,
      "time": 1717718400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112302,
      "time": 1717804800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112302,
      "time": 1717891200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112302,
      "time": 1717977600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112555,
      "time": 1718064000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112048,
      "time": 1718150400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112332,
      "time": 1718236800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113798,
      "time": 1718323200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011157,
      "time": 1718409600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011157,
      "time": 1718496000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011157,
      "time": 1718582400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112608,
      "time": 1718668800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011713,
      "time": 1718755200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.011976,
      "time": 1718841600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0114613,
      "time": 1718928000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112265,
      "time": 1719014400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112265,
      "time": 1719100800000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112265,
      "time": 1719187200000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113636,
      "time": 1719273600000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0112994,
      "time": 1719360000000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0113314,
      "time": 1719446400000
  },
  {
      "source": "RUB",
      "target": "USD",
      "value": 0.0117438,
      "time": 1722843269886
  }
];

// Ma'lumotlarni qayta ishlash
const labels = dataPoints.map(point => new Date(point.time).toLocaleDateString());
const values = dataPoints.map(point => point.value);

const data = {
  labels,
  datasets: [
    {
      label: 'RUB to USD',
      data: values,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'RUB to USD Exchange Rate',
    },
  },
};

function App() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        RUB to USD Exchange Rate Bar Chart
      </Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Bar data={data} options={options} />
      </Paper>
    </Container>
  );
}

export default App;
