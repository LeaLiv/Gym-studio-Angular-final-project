import { Injectable } from '@angular/core';
import registrations from '../../../public/data/registrations.json'
import { registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

  getRegistrations():registration[]{    
    return registrations;
  }
}
