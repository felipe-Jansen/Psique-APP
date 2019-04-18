import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstatisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estatistica',
  templateUrl: 'estatistica.html',
})
export class EstatisticaPage {

  barChartOptions: any = [{
    scales: {
       yAxes: [
        {
            display: true,
            ticks: {
              fontSize: 10,
              colors: '#fff'
            }
        }
      ]
    }
  }];
  barChartLabels = [];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartData:any;
  barChartColors:Array<any> = [
    {
      backgroundColor: '#3F51B5',
      borderColor: '#3F51B5',
      pointBackgroundColor: '#3F51B5',
      pointBorderColor: '#3F51B5',
      pointHoverBackgroundColor: '#3F51B5',
      pointHoverBorderColor: '#3F51B5',
      labels: '#3F51B5'
    }]
 
  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string = 'doughnut';

  constructor(public navCtrl: NavController, 
            public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatisticaPage');
  }

  calc(tipo){
    if (tipo === 'bar') {
        this.calcBar();
    } else {
        this.calcDoughnut();
    }
  }
  
  calcBar(){
    this.barChartLabels = ['Bem', 'Muito Bem', 'Triste', 'Muito Triste', 'Mais ou Menos'];      
    this.barChartData = [
  	  {data: [65, 59, 80, 81, 56], label: 'Humor'}
    ];
  }
  
  calcDoughnut(){
    this.doughnutChartLabels = ['Bem', 'Muito Bem', 'Triste', 'Muito Triste', 'Mais ou Menos'];
    this.doughnutChartData = [65, 59, 80, 81, 56];
  };

}
