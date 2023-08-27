import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  client : any = [];
  public loginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder,private http : HttpClient, private router : Router, private service : AppServiceService){}
  
  ngOnInit(): void {
    this.getDataFromAPI();
    console.log(this.client);

      this.loginForm = this.formBuilder.group({
        e_mail :[''],
        password :['']
      });
  }

getDataFromAPI(){
    this.service.getClient().subscribe((response : any) => {
            response.data.forEach((e : any) => {
              this.client.push(e);
            });
        },(error : any)=>{
          console.log('Error',error);
        });
  }


login(){
    this.http.get<any>('http://localhost:3000/client')
    .subscribe((res: any)=>{
      let test : boolean = false;
      for(let item of this.client){
        if(this.loginForm.value.password !='' && this.loginForm.value.password !='' && item.password == this.loginForm.value.password && item.e_mail == this.loginForm.value.e_mail){
          test = true;
          console.log(test);
        }
        else{
          test = false;
          console.log(test);
        }
        if(test == true){
          alert('Log In successfull');
          break;
        }
        else{
          alert('No User found');
          break;
        }
        }
        },err=>{
          alert('Error');
        });        
    }
}
