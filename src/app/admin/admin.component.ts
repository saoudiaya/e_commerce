import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  closeResult: string = '';
  produit : any = [];

  base64 : any;
  form!:FormGroup;
  link : any;
  constructor(private service : AppServiceService,private modalService: NgbModal,private build: FormBuilder){}
  ngOnInit(){
    this.form = this.build.group({

    name : ['',Validators.required],
    price : ['',Validators.required],
    size : ['',Validators.required],
    color : ['',Validators.required],
    qteStock : ['',Validators.required],
    category : ['',Validators.required],
    image : ['',Validators.required]
    })
    this.getDataFromAPI();
    console.log(this.produit);
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
open1(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  getImagePath(event:any){
      const path = event.target.files[0].name;
      const link =' ../../assets/'+path;
      this.form.get('image')?.setValue(link);
      console.log(link);
  };

addProduct(){
  const data = this.form.value;
  this.service.postData(data).subscribe(res =>{
    alert("Add Product Success");
   });
 }

 deleteProduct(id : number){
   console.log(id);
   this.service.deleteData(id).subscribe(res=>{
    alert("Delete Product Success");
   })
 }

EditProduct(id : number){
  const data = this.form.value;
  console.log(id);
   this.service.updateData(data,id).subscribe(res=>{
    alert("Edit Product Success");
   })
}
}
