import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlProdutos = 'http://spakimail.azurewebsites.net/api/Product';
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.urlProdutos}`);
  }
}
