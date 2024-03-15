<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { DATE } from "@/constants/mock/radiators";
import CHART_COLORS from "@/constants/chart/colors";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const CHART_Y_VALUE_PADDING = 2;

const { getHistoryByDate } = useFirestoreRadiators();

const {
  pending,
  data: radiators,
  refresh,
} = useAsyncData("radiatorsHistory", () => getHistoryByDate(DATE), {
  lazy: true,
});

onMounted(() => {
  refresh();
});

interface ChartData {
  labels: Array<string>;
  datasets: Array<any>;
}
const chartData = useState<ChartData>("radiatorsChartData", () => ({
  labels: [],
  datasets: [],
}));

const defaultChartOptions = {
  legend: {
    display: true,
    position: "top",
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 30,
    },
  },
};
const chartOptions = useState("radiatorsChartOptions", () => ({
  ...defaultChartOptions,
}));

watch(radiators, (newRadiators) => {
  if (!newRadiators) {
    return;
  }

  let temperatureMin: number | null = null;
  let temperatureMax: number | null = null;

  const radiatorsFirstId = Object.keys(newRadiators)[0];
  const labels = Object.keys(newRadiators[radiatorsFirstId].hours);

  const newChartData: ChartData = {
    labels,
    datasets: Object.values(newRadiators).map((radiator, radiatorIndex) => {
      const temperaturesByHours = Object.values(radiator.hours).map(
        (radiatorHourData) => {
          const temperature = radiatorHourData.temperature;

          if (!temperatureMin || temperature < temperatureMin) {
            temperatureMin = temperature;
          }
          if (!temperatureMax || temperature > temperatureMax) {
            temperatureMax = temperature;
          }

          return temperature;
        }
      );
      const color =
        radiatorIndex < CHART_COLORS.length
          ? CHART_COLORS[radiatorIndex]
          : CHART_COLORS[0];

      return {
        label: radiator.name,
        data: temperaturesByHours,
        lineTension: 0,
        backgroundColor: color,
        borderColor: color,
      };
    }),
  };

  chartData.value = newChartData;
  if (temperatureMin && temperatureMax) {
    chartOptions.value = {
      ...defaultChartOptions,
      scales: {
        y: {
          suggestedMin: temperatureMin - CHART_Y_VALUE_PADDING,
          suggestedMax: temperatureMax + CHART_Y_VALUE_PADDING,
        },
      },
    };
  }
});
</script>

<template>
  <ChartRadiatorsHistoryLoader v-if="pending || !radiators" />
  <Bar v-else id="my-chart" :options="chartOptions" :data="chartData" />
</template>

<style scoped lang="scss"></style>
