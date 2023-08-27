import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  
  searchKey: string = "";
  produit : any = [];
  constructor(private service : AppServiceService , private CartService : CartService){
  }

  ngOnInit(){
      this.getDataFromAPI();
      console.log(this.produit);   
    
      this.produit.forEach((e : any) => {
        Object.assign(e,{quantity : 1,total : e.price});
        
      });

      this.CartService.search.subscribe((val : any)=>{
        this.searchKey = val;
      })
  }

  getDataFromAPI(){
    this.service.getData().subscribe((response : any) => {
            //console.log('Response from API is',response['data'][0]['name']);
            response.data.forEach((e : any) => {
              this.produit.push(e)
            });
        },(error)=>{
          console.log('Error',error);
        })
  }
  addToCart(item : any){
    this.CartService.addToCart(item);
  
   }

}
