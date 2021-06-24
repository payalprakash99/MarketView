import React, { Component } from "react";
// Import Highcharts
import { render } from "react-dom";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";
import './drilldown.css'
drilldown(Highcharts);


class TestingChart extends Component {
  constructor(props) {
    super(props);
    // this.allowChartUpdate = true;
    this.state = {
      options: {
        chart: {
            height: 400,
              width:600,
          type: "column",
          events: {
            drilldown: function(e) {
              // console.log("Drilldown" + e.point.name);
              if (!e.seriesOptions) {
                var chart = this;
                if (e.point.name === "NAMR") {
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "Profit",
                    color: "green",
                    data: [["March", 34], ["April", 22], ["May", 32]]
                  });
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "Loss",
                    color: "blue",
                    data: [["March", 34], ["April", 22], ["May", 32]]
                  });
                }
                chart.applyDrilldown();
              }
            }
          }
        },

        title: {
          text: "Last 3 months return",
          style: {
            fontSize: "15px",
            fontWeight: "bold",
            color: "#123E69"
          }
        },
        subtitle: {
          text: "Axis Equity Mutual Fund"
        },

        xAxis: {
          // categories: ['Chrome', 'Firefox']
          type: "category"
        },
        yAxis: {
          min: 0, // Lowest value to show on the yAxis
          title: {
            text: "Percentage" // Title for the yAxis
          }
        },
        legend: {
          enabled: true // Enable/Disable the legend
        },

        tooltip: {
          shared: true // If you have multiple series then all points in each category will show up on one tooltip
        },

        series: [
          {
            name: "Profit",
            data: [
              {
                name: "NAMR",
                y: 34,
                drilldown: true
              }
            ]
          },
          {
            name: "Loss",
            data: [
              {
                name: "NAMR",
                y: 34,
                drilldown: true
              }
            ]
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //   // const chart = this.refs.chartComponent.chart;
  // }

  // categoryClicked() {
  //    this.allowChartUpdate = true;

  //  }

  render() {
    return (
      <HighchartsReact    highcharts={Highcharts} options={this.state.options}
      />
    );
  }
}
render(<TestingChart />, document.getElementById("root"));

export default TestingChart