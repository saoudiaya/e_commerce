import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public signupForm !: FormGroup;
  client : any = [];
  ngOnInit(){
    this.getDataFromAPI();
    console.log(this.client);

    this.signupForm = this.formBuilder.group({
      e_mail :[''],
      password :[''],
      first_name :[''],
      last_name :[''],
    });
  }
  constructor(private service : AppServiceService,private formBuilder : FormBuilder,private http : HttpClient,private router: Router){}
  getDataFromAPI(){
    this.service.getClient().subscribe((response : any) => {
            response.data.forEach((e : any) => {
              this.client.push(e);
            });
        },(error : any)=>{
          console.log('Error',error);
        });
  }
  signUp(){
    this.http.post<any>('http://localhost:3000/client',this.signupForm.value)
    .subscribe(res=>{
      console.log("SignUp Successfull !!");
    },err=>{
      alert("Error");
    }
    );
  }

}
