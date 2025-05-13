import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router:Router,private userService:UserService){}
  username:string="";
  password:string="";

  login(){
this.userService.login(this.username,this.password).subscribe(user=>{
  if(user){
    
    if(user.role==='מורה להתעמלות'){
      this.router.navigate(["/classList"])
      sessionStorage.setItem("role","teacher");
      sessionStorage.setItem("teacerName",user.name)
    }
      
    else{ 
      this.router.navigate(["/registrants"])
       sessionStorage.setItem("role","secretary");
       sessionStorage.setItem("secretaryName",user.name)
    }
   
  }
  else
  alert("שם או סיסמא שגויים")
})
  }

}
