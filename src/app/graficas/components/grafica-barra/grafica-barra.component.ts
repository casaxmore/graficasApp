// imports de Angular
import { Component, Input, OnInit, ViewChild } from '@angular/core';

// imports de ng2-charts
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartEvent,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// para este import, necesitamos instalar con npm:
// npm i chartjs-plugin-datalabels
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css'],
})
export class GraficaBarraComponent {
  // ===========
  // ### Inputs
  // ===========

  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[] | unknown[] | undefined;
  @Input() inputDatasets!: ChartDataset<any, any>[];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // ================
  // ### propiedades
  // ================
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true, // para tener la leyenda si o no
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },

    indexAxis: 'x',
  };

  public barChartType: ChartType = 'bar'; // los tipos de gráfica
  public barChartPlugins = [DataLabelsPlugin];

  // propiedad e mi gráfica -> barCharData
  // -------------------------------------

  // ALGUNAS PROPIEDADES INTERESANTES:
  // backgroundColor -> para definir el color de la barra
  // hoverBackgroundColor -> cuando hago click sobre la barra, me sale un color
  public barChartData: ChartData<'bar'> = {
    // ==> REFACTORIZO ESTO UTILIZANDO LOS INPUTS!!
    labels: [],
    datasets: [],
  };

  // ================
  // ### constructor
  // ================
  constructor() {
    //console.log(this.horizontal);
  }

  // ================
  // ### ngOnInit
  // ================
  ngOnInit(): void {
    //console.log(this.horizontal); // aquí si recibo en un inicio la propiedad cuando se construyen las gráficas
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y'; // angular confía en mí siempre vas a tener algo ahí!
    }

    //console.log(this.inputDatasets); // Si funciona!
    //console.log(this.inputLabels); // Si funciona !

    this.barChartData.datasets = this.inputDatasets;
    this.barChartData.labels = this.inputLabels;
  }

  // ===========
  // ### events
  // ===========

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    //console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    //console.log(event, active);
  }
}
