import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import './chart.css';

class MyChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [],
      }],
      options: {
        chart: {
          background: '#0d101d',
          id: 'id-mychart',
          type: 'area',
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 7,
          labels: {
            style: {
              colors: '#849fb4',
            },
            formatter: (value, timestamp) => moment(new Date(timestamp)).format('MMM`YY'),
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          floating: false,
          crosshairs: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          offsetY: -40,
          offsetX: 50,
        },
        yaxis: {
          type: 'numeric',
          labels: {
            style: {
              colors: '#849fb4',
            },
            offsetY: -40,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            colorStops: [
              [
                {
                  offset: 0,
                  color: 'rgb(78, 255, 207)',
                  opacity: 80,
                },
                {
                  offset: 20,
                  color: 'rgb(78, 255, 207)',
                  opacity: 50,
                },
                {
                  offset: 100,
                  color: 'rgb(8, 164, 188)',
                  opacity: 0,
                },
              ],
            ],
          },
        },
        grid: {
          show: false,
        },
        stroke: {
          show: false,
        },
      },
    };
  }

  componentDidMount() {
    const { series, firstClr, secondClr } = this.props;
    const newSeries = [{ data: series }];
    const newColorStops = [
      [
        {
          offset: 0,
          color: firstClr,
          opacity: 80,
        },
        {
          offset: 20,
          color: firstClr,
          opacity: 50,
        },
        {
          offset: 100,
          color: secondClr,
          opacity: 0,
        },
      ],
    ];
    this.setState({
      series: newSeries,
      options: {
        ...this.state.options,
        fill: {
          ...this.state.options.fill,
          gradient: {
            ...this.state.options.fill.gradient,
            colorStops: newColorStops
          }
        }
      }
    });
  }

  componentDidUpdate(prevProps) { }

  componentWillUnmount() { }

  render() {
    const { title } = this.props;
    const { options, series } = this.state;
    return <div className="chart">
      <p className="title">
        {title}
      </p>
      <Chart type="area" height={300} options={options} series={series} />
    </div>
  }
}

export default MyChart;
