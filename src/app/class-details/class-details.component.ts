import { Component, Input } from '@angular/core';
import { lesson } from '../models/lesson';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-class-details',
  imports: [MatCardModule],
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.css'
})

export class ClassDetailsComponent {
  @Input() lessonDetails!:lesson ;
  
 
}
