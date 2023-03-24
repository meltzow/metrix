import {Component} from '@angular/core';

@Component({
  selector: 'app-cycle-time-scatterplot',
  templateUrl: './cycle-time-scatterplot.component.html',
  styleUrls: ['./cycle-time-scatterplot.component.sass']
})
export class CycleTimeScatterplotComponent {
  public linechart = {
    "datasets": [
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
      {data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5], type: 'line'},
    ],
    labels: ["1","2","3","4","5","6"],
    "options": {
      scales: {
      }
    }
  };

  public chart = {
    "datasets": [
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
      {data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5], type: 'line', xAxisID: 'x2'}
    ],
    "labels": ["1", "2", "3", "4", "5"],
    "options": {
      scales: {
        x: {

        },
        x2: { // add extra axes
          position: 'bottom',
          type: 'category',
          display: true
        },
      }
    }
  };

}
