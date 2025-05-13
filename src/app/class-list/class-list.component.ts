import { Component,OnInit } from '@angular/core';
import { lesson } from '../models/lesson';
import { LesssonsService } from '../services/lesssons.service';
import { NgFor } from '@angular/common';
import { ClassDetailsComponent } from '../class-details/class-details.component';

@Component({
  selector: 'app-class-list',
  imports: [NgFor,ClassDetailsComponent],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent {
  constructor(private lessonService:LesssonsService){
    this.clsses=this.lessonService.getLessons();
   
  }
clsses:lesson[]=[]
teacherName:string=sessionStorage.getItem("teacerName")||"";
ngOnInit(){
 this.clsses=this.clsses.filter(lesson=>lesson.teacher===this.teacherName)
}
  
}
