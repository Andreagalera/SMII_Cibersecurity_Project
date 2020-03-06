import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  nombre: string;
  readonly URL_API = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.URL_API);
  }

  postData(nombre: string) {
    return this.http.post(this.URL_API, nombre);
  }

}
