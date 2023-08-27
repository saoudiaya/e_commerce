import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-detailshop',
  templateUrl: './detailshop.component.html',
  styleUrls: ['./detailshop.component.css']
})
export class DetailshopComponent implements OnInit{

  url_id:string="";
  url_color:string="";
  constructor(private router:Router,private service : AppServiceService,private cartService : CartService) {
    this.url_id=this.router.url.split("/")[2];
    console.log(this.url_id)
    this.url_color=this.router.url.split("/")[3];
    console.log(this.url_color)
   }

  @Input() produit : any = [];


  ngOnInit(){
      this.getDataFromAPI();
      console.log(this.produit);    
  }

  getDataFromAPI(){
    this.service.getData().subscribe((response : any) => {
            //console.log('Response from API is',response['data'][0]['name']);
            response.data.forEach((e : any) => {
              this.produit.push(e)
            });
        },(error: any)=>{
          console.log('Error',error);
        })
  }
  addToCart(item : any){
    this.cartService.addToCart(item);
  
   }

   
}
