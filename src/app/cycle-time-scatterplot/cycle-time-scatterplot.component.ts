import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'app-cycle-time-scatterplot',
  templateUrl: './cycle-time-scatterplot.component.html',
  styleUrls: ['./cycle-time-scatterplot.component.sass']
})
export class CycleTimeScatterplotComponent {
  // @ViewChild( BaseChartDirective ) chart: BaseChartDirective;

  // private updateChart(){
  //   this.chart.ngOnChanges({});
  // }
  quantil = 2.5;
  public linechart = {
    datasets: [
      {
        data: [
          {x: 1, y: 1},
          {x: 2, y: 3},
          {x: 3, y: -2},
          {x: 4, y: 4},
          {x: 5, y: -3},
        ],
        label: 'Series A',
        pointRadius: 10, type: 'scatter'
      },
      {data: [this.quantil, this.quantil, this.quantil, this.quantil, this.quantil, this.quantil], type: 'line', pointRadius: 0},
    ],
    labels: ["1","2","3","4","5","6"],
    "options": {
      scales: {
      }
    }
  };

  valueChange(){
    this.linechart.datasets[1]['data'] = [this.quantil, this.quantil, this.quantil, this.quantil, this.quantil, this.quantil];
    // just trying refresh full variable
    this.linechart.datasets = this.linechart.datasets.slice();
  }

}
