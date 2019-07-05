import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeserviceService {


  private subject = new Subject<any>();

  constructor() { }
 getMethod(value) {
    this.subject.next(value);
 }
sendMessage(): Observable<any> {
    return this.subject.asObservable();
  }
 }

