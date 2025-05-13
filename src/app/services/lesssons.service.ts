
import { Injectable } from '@angular/core';
import { lesson } from '../models/lesson';
import lessons from '../../../public/data/lessons.json'

@Injectable({
  providedIn: 'root'
})
export class LesssonsService {
  getLessons():lesson[]{    
    return lessons;
  }
}
