import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  world: any = {};
  tablaCovid: any[] = [];
  pais: any[] = [];
  argentina: any;
  loading = true;

  constructor(private covidService: CovidService) {
    covidService.getCovidWorld().subscribe(res => {
      this.world = res;
    });

    /*covidService.getCovidPaises().subscribe((res: any[]) => {
      this.tablaCovid.push(...res);
    });*/

    covidService.getCovidPaisesUrl1().subscribe((res: any[]) => {
      this.tablaCovid = res;

      console.log(this.tablaCovid);
    });

    covidService.getCovidPais('argentina').subscribe((res: any) => {
      this.pais.push(...res);

      this.argentina = this.pais[this.pais.length - 1];
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
