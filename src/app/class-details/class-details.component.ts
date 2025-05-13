import { Component, Input } from '@angular/core';
import { lesson } from '../models/lesson';
import {MatCardModule} from '@angular/material/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-class-details',
  imports: [MatCardModule,NgClass],
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.css'
})

export class ClassDetailsComponent {
  @Input() lessonDetails!:lesson ;

 
  isStarted(date: string): boolean {
  const today = new Date();
  const start = new Date(date);
  return start <= today;
}
}
