import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent implements OnInit {

  paises: any[] = [];
  pais: any[] = [];
  paisUltimo: any;

  constructor(private covidService: CovidService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      if (params.pais) {
        covidService.getCovidPais(params.pais).subscribe((res: any[]) => {
          this.pais.push(...res);

          this.paisUltimo = this.pais[this.pais.length - 1];
        });
      }
    });

    covidService.getPaisesDisponibles().subscribe((res: any[]) => {
      this.paises.push(...res);
    });
   }

   consultar(select: any) {
    this.router.navigate(['/consulta', select]);
   }

  ngOnInit() {
  }

}
