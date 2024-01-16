import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
      .set('fields','name,capital,population,flags,cca2');
  }

  constructor(private http: HttpClient) {

  }

  buscarPais(termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${ termino }`;
    //Para que se ejecute tenemos que llamar al subscribe
    return this.http.get<Country[]>(url, {params: this.httpParams}); //Colocar el tipado
  }

  buscarCapital(termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${ termino }`;
    //Para que se ejecute tenemos que llamar al subscribe
    return this.http.get<Country[]>(url, {params: this.httpParams}); //Colocar el tipado
  }

  getPaisPorCodigo(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      );

  }

}
