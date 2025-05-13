import { Component } from '@angular/core';
import { registration } from '../models/registration';
import { RegistrationsService } from '../services/registrations.service';
import { MatTableModule } from '@angular/material/table';
import { AllCommunityModule, CheckboxEditorModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridAngular } from 'ag-grid-angular'
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RegistrantDetailsDialogComponent } from '../registrant-details-dialog/registrant-details-dialog.component';

@Component({
  selector: 'app-registrants',
  imports: [MatTableModule, AgGridAngular,CommonModule],
  templateUrl: './registrants.component.html',
  styleUrl: './registrants.component.css'
})
export class RegistrantsComponent {
  constructor(private registrationsService: RegistrationsService,private dialog:MatDialog) {
    this.registrationList = this.registrationsService.getRegistrations();

  }
    gridOptions={
    enableRtl:true
  }
  registrationList: registration[] = [];

  sesecretary: string = sessionStorage.getItem("secretaryName") || "";
  colDefs: ColDef[] = [
    { field: "fullName", headerName: "שם", filter: 'agTextColumnFilter', valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}` },
    // { field: "phone", headerName: "טלפון", },
    // { field: "id", headerName: "תעודת זהות", filter: 'agTextColumnFilter', },
    { field: "lesson", headerName: "נרשמה לשיעור", filter: 'agTextColumnFilter', },
    { field: "paid", headerName: "שולם", filter: 'agNumberColumnFilter',cellEditor:'agCheckboxCellEditor' ,editable:false ,},
    {field:"details",headerName:"פרטי נרשמת" , cellRenderer: (params:ICellRendererParams)=>{
      const button=document.createElement('button')
      button.innerText="פרטים";
        button.className = 'details-button';
      button.addEventListener('click',()=>{
        this.dialog.open(RegistrantDetailsDialogComponent,{data:params.data})
      })
      return button;
    },

  filter: false
  }
  ]


}
