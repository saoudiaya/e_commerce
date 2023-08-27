import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3000/product');
  }
  postData(data : any){
    return this.http.post<any>('http://localhost:3000/product',data);
  }
  deleteData(id: number){
    return this.http.delete<any>(`http://localhost:3000/product/${id}`);
  }
  updateData(data: any, id: number){
    return this.http.put<any>(`http://localhost:3000/product/${id}`,data);
  }

  getClientbyID(id: number){
    return this.http.get(`http://localhost:3000/client/${id}`);
  }
  getClient(){
    return this.http.get('http://localhost:3000/client');
  }
  postClient(data : any){
    return this.http.post<any>('http://localhost:3000/client',data);
  }
  deleteClient(id: number){
    return this.http.delete<any>('http://localhost:3000/client'+id);
  }
  updateClient(data: any, id: number){
    return this.http.put<any>('http://localhost:3000/client'+id,data);
  }

  getCommande(){
    return this.http.get('http://localhost:3000/commande');
  }
  postCommande(data : any){
    return this.http.post<any>('http://localhost:3000/commande',data);
  }
  deleteCommande(id: number){
    return this.http.delete<any>(`http://localhost:3000/commande/${id}`);
  }
  updateCommande(data: any, id: number){
    return this.http.put<any>(`http://localhost:3000/commande/${id}`,data);
  }

}
  