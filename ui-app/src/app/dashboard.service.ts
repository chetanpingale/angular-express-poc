import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {

  }
  getData() {
    return this.http.get<any>('https://reqres.in/api/users?per_page=12');
  }
}
