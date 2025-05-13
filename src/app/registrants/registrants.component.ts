import { Component } from '@angular/core';
import { registration } from '../models/registration';
import { RegistrationsService } from '../services/registrations.service';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-registrants',
  imports: [MatTableModule],
  templateUrl: './registrants.component.html',
  styleUrl: './registrants.component.css'
})
export class RegistrantsComponent {
   constructor(private registrationsService:RegistrationsService){
      this.registrationList=this.registrationsService.getRegistrations();
     
    }
  registrationList:registration[]=[];
  displayedColumns: string[]=['fullName','phone','id','lesson','paid']
  sesecretary:string=sessionStorage.getItem("secretaryName")||"";
}
