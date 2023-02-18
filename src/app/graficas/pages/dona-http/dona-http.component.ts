import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    /* this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);

      console.log(labels);
      this.doughnutChartLabels = labels;
      console.log(values);
    }); */

    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        // console.log(data);
        this.doughnutChartData = { labels, datasets };
      });
  }

  // Doughnut
  public doughnutChartLabels: string[] = [
    /* 'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales', */
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [], backgroundColor: ['#FA01F9', '#A80BE3', '#7A0DFD'] },
      /*
      { data: [50, 150, 120] },
      { data: [250, 130, 70] }, */
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
