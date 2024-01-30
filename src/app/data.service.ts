import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  loadData() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: httpHeaders
    };

    let url ="https://hpb.health.gov.lk/api/get-current-statistical";
    return this.httpClient.get(url, options);
}
}