import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../service/cart.service';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  closeResult: string = '';

  public totalItem :  number = 0;

  public searchTerm : string = '';

  public product : any = [];
  public grandTotal !: number ;
  form!:FormGroup;
  today = new Date();
 
  constructor(private modalService: NgbModal,private cartService : CartService,private service : AppServiceService,private build: FormBuilder) {}
  
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })

    this.cartService.getProduct().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);

  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  addCommande(id_produit : number){
    let data : any = {id_produit,
                      total_commande :this.grandTotal,
                      date_commande :this.today};
    console.log(data);
    this.service.postCommande(data).subscribe(res=>{
     alert("Add Order Success");
    })
  }

}
