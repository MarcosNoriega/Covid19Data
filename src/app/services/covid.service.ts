import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  public getCovidWorld() {
    return this.http.get(environment.urlCovid1 + '/world/total');
  }

  public getCovidPaises() {
    return this.http.get(environment.urlCovid2);
  }

  public getCovidPais(pais: string) {
    return this.http.get(environment.urlCovid1 + `/live/country/${pais}/status/confirmed`);
  }

  public getPaisesDisponibles() {
    return this.http.get(environment.urlCovid1 + '/countries');
  }

  public getCovidPaisesUrl1() {
    return this.http.get(environment.urlCovid1 + '/summary');
  }
}
