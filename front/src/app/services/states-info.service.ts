import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

export interface StateInfoData{
  NU_GERAL: number,
  N_SAMPLES: string
}

export interface StateMoneyInfoData{
  moneyGroup: string,
  N_SAMPLES: number,
  NU_GERAL_STATE_MONEY: number
}

export interface ColotByStateInfoData{
  TP_COR_RACA: string,
  N_SAMPLES: number
}

export interface SchoolTypeByState{
  TP_ESCOLA : string,
  N_SAMPLES: number
}

@Injectable({
  providedIn: 'root'
})

export class StatesInfoService {
  constructor(private http: HttpClient){}
  configUrl = 'http://localhost:3000/state/';

  // router.get('/:sigla' , getStateDataCtr)
  // router.get('/:sigla/money-group-info' , getMoneyInfoCtr)
  // router.get('/:sigla/color-group-info' , getColorByStateInfoCtr)
  // router.get('/:sigla/school-group-info' , getSchoolTypeByStateCtr)
  getStateData(stateSigla:string): Observable <any> {
    return this.http.get<StateInfoData>(this.configUrl+stateSigla).pipe(
      catchError(this.handleError)
    );
  }

  getMoneyInfo(stateSigla:string): Observable <any> {
    return this.http.get<any>(this.configUrl+stateSigla+"/money-group-info").pipe(
      catchError(this.handleError)
    )
  }

  getColorsByStateInfo(stateSigla:string): Observable <any> {
    return this.http.get<any>(this.configUrl+stateSigla+"/color-group-info").pipe(
      catchError(this.handleError)
    )
  }

  getSchoolTypeByState(stateSigla:string): Observable<any> {
    return this.http.get<any>(this.configUrl+stateSigla+"/school-group-info").pipe(
      catchError(this.handleError)
    )
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

