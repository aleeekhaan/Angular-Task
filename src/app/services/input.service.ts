import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private temp : number[] = [1,2,3,4,5,6,7,8,9]
  private source = new BehaviorSubject(this.temp);
  private data = this.source.asObservable();

  constructor(private http : HttpClient) { }

  getDataFromUrl (url : string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get<any>( url , {headers : headers})
      .subscribe(res => {
        this.updateData(res.data);
      });
  }

  updateData (data : number[]) {
    this.source.next(data);
  }

  getData() {
    return this.data;
  }
}
