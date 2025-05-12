import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { NovalidComponent } from './novalid/novalid.component';
import { RegistrantsComponent } from './registrants/registrants.component';
import { teacherGuard } from './guards/teacher.guard';
import { secretaryGuard } from './guards/secretary.guard';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'classList',component:ClassListComponent, canActivate:[teacherGuard]},
    {path:'details',component:ClassDetailsComponent},  
    {path:'registrants',component:RegistrantsComponent,canActivate:[secretaryGuard]},
    { path: '**', component: NovalidComponent },
  
]; 
