import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit{
  url_id:string="";
  constructor(private router:Router,private service : AppServiceService,private cartService : CartService) {
    this.url_id=this.router.url.split("/")[2];
    console.log(this.url_id)
   }
   @Input() commande : any = [];
   @Input() produit : any = [];
   ngOnInit(){
      this.getDataFromAPI();
      console.log(this.produit);  
      this.getDataCommandeFromAPI();
      console.log(this.commande);

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
  getDataCommandeFromAPI(){
    this.service.getCommande().subscribe((response : any) => {
      //console.log('Response from API is',response['data'][0]['name']);
      response.data.forEach((e : any) => {
        this.commande.push(e)
      });
  },(error: any)=>{
    console.log('Error',error);
  })
  }
}
