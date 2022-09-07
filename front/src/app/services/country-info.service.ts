import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

export interface StateInfo {
  index: number;
  stateSigla: string;
  NU_NOTA_MT: number;
  NU_NOTA_LC:number;
  NU_NOTA_CN:number;
  NU_NOTA_CH:number;
  NU_NOTA_REDACAO:number;
  N_SAMPLES:number;
  createdAt:any;
  updatedAt:any;
}


export interface ColorInfo {
  index: number;
  TP_COR_RACA:string;
  NU_NOTA_MT: number;
  NU_NOTA_LC:number;
  NU_NOTA_CN:number;
  NU_NOTA_CH:number;
  NU_NOTA_REDACAO:number;
  N_SAMPLES:number;
  NU_GERAL_BY_COLOR:number;
  createdAt:any;
  updatedAt:any;
}


export interface CountryInfo {
  index: number;
  stateSigla: string;
  NU_NOTA_MT: number;
  NU_NOTA_LC:number;
  NU_NOTA_CN:number;
  NU_NOTA_CH:number;
  NU_NOTA_REDACAO:number;
  NU_GERAL_ESTADO_CIVIL:number;
  N_SAMPLES:number;
  createdAt:any;
  updatedAt:any;
}


export interface MaritalStatus {
  index: number;
  TP_ESCOLA:string;
  N_SAMPLES: number;
  NU_NOTA_MT: number;
  NU_NOTA_LC: number;
  NU_NOTA_CN: number;
  NU_NOTA_CH: number;
  NU_NOTA_REDACAO: number;
  NU_GERAL_TIPO_ESCOLA: number;
  createdAt:any;
  updatedAt:any;
}

export interface ColorAndType {
  index: number;
  TP_COR_RACA:string;
  TP_ESCOLA: string;
  N_SAMPLES: number;
  NU_NOTA_MT: number;
  NU_NOTA_LC: number;
  NU_NOTA_CN: number;
  NU_NOTA_CH: number;
  NU_NOTA_REDACAO: number;
  NU_GERAL_TIPO_ESCOLA: number;
  createdAt: any;
  updatedAt: any;
}


@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
  configUrl = 'http://localhost:3000/country/';

  constructor(private http: HttpClient)  { }
  statesData = [];

  getStates(): Observable <any> {
    return this.http.get<any>(this.configUrl+"states").pipe(
      catchError(this.handleError)
    );
  }

  getColors(): Observable <any>{
    return this.http.get<any>(this.configUrl+"colors").pipe(
      catchError(this.handleError)
    );
  }
  getMaritalStatus(): Observable <any>{
    return this.http.get<any>(this.configUrl+"marital-status").pipe(
      catchError(this.handleError)
    );
  }
  getSchoolType(): Observable <any>{
    return this.http.get<any>(this.configUrl+"school-type").pipe(
      catchError(this.handleError)
    );
  }

  getSchoolColors(): Observable <any>{
    return this.http.get<any>(this.configUrl+"school-and-colors").pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
