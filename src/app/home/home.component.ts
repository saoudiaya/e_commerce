import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  searchKey : string = ""; 
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/highlight-id-DbOdCSoefsg-unsplash.png"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/amanda-vick-ohWf6YuzOQk-unsplash1.png"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/priscilla-du-preez-dlxLGIy-2VU-unsplash.png"}
  ];
  
  produit : any = [];
  constructor(private service : AppServiceService,config: NgbCarouselConfig, private cartService : CartService){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(){
      this.getDataFromAPI();  
      this.produit.forEach((e : any) => {
        Object.assign(e,{quantity : 1,total : e.price});
        
      });

      this.cartService.search.subscribe((val : any)=>{
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
  this.cartService.addToCart(item);

 }

}
