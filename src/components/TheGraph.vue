<template>
  <v-card class="pa-4">
    <h2>Аналитика по визитам</h2>
    <div id="chartdiv" class="hello"></div>
  </v-card>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import * as am5 from "@amcharts/amcharts5";
import { Theme as am5themes_Animated } from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { Vue } from "vue-class-component";
import { IAnaliticsResponse } from "@/types/analiticsResponse.interface";
import am5locales_ru_RU from "@amcharts/amcharts5/locales/ru_RU";

export default class extends Vue {
  @Prop(Array) readonly analiticsData!: IAnaliticsResponse[];

  mounted() {
    const root = am5.Root.new("chartdiv");

    root.locale = am5locales_ru_RU;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // Generate random data
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    const formatDate = (date: string) => {
      const [year, month, day] = date.split("-");
      return new Date(+year, +month - 1, +day).getTime();
    };

    const generateDate = () => {
      return this.analiticsData.map((item) => {
        return { date: formatDate(item.date), value: item.visits };
      });
    };

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          pan: "zoom",
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.5,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 2,
          fill: series.get("fill"),
        }),
      });
    });

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    const data = generateDate();
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }
}
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
