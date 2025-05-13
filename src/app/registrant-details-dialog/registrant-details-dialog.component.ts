import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { registration } from '../models/registration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrant-details-dialog',
  imports: [MatDialogModule,CommonModule],
  templateUrl: './registrant-details-dialog.component.html',
  styleUrl: './registrant-details-dialog.component.css'
})
export class RegistrantDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: registration) {}

}
