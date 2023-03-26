import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpResponse, } from '@angular/common/http';

import { firstValueFrom } from "rxjs";


interface options {
  withCredentials?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected httpClient: HttpClient) {
  }


  public async get<T>(url: string): Promise<T> {
    let account
      const headers = await this.addDefaultHeaders()
      return firstValueFrom(this.httpClient.get<T>(url, {
        observe: 'body',
        responseType: 'json',
        headers: headers
      }))

  }

  private async addDefaultHeaders(): Promise<HttpHeaders> {
    let localVarHeaders = new HttpHeaders();

    // if (account) {
    localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + "MTEzOTkzNDQzODA4OhLFYhAYRkfu47m9Mpj9DSQElGTr");
    // }

    localVarHeaders = localVarHeaders.set('Accept', 'application/json');
    localVarHeaders = localVarHeaders.set('Content-Type', 'application/json');

    return localVarHeaders
  }

}
