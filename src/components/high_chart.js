import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
function high_chart() {
    const options = {
          
        title: {
          text: 'Historical cummulative returns'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        series: [{
          name: 'ICICI Prudential Focused Bluechip Equity Fund.',
          data: [-50 , 0, 550, 300, 100, 650, 350, 100, 1000],
          type: 'line'
        },
        {
          name: 'Aditya Birla Sun Life Small & Midcap Fund.',
          data: [-108 , 0, 507, 415, 1000, 560, 300, 800, 250],
          type: 'line'
        },
        {
          name: 'Tata Equity PE Fund',
          data: [-60 , 0, 100, 200, 300, 600, 700, 850, 900],
          type: 'line'
        },
        {
          name: 'HDFC Monthly Income Plan – MTP.    ',
          data: [-50 , 100, 200, 300, 400, 300, 350, 500, 700],
          type: 'line'
        },
      ],
        yAxis: {
          title: {
            text: 'Cummulative return (In percentages)', 
          },
          labels: {
            formatter: function() {
                return this.value + ' %';
            }
        },
        },
      
        xAxis: {
          accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
          }
        },
        plotOptions: {
          series: {
                  pointStart: 2010
          }
        },
        responsive: {  
          rules: [{  
            condition: {  
              maxWidth: 1000  
            },  
            chartOptions: {  
              legend: {  
                enabled: false  
              }  
            }  
          }]  
        } 
      }
      
return (
        <HighchartsReact  highcharts={Highcharts} options={options}/>
        );
};
