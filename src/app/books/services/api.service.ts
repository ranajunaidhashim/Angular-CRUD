import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // constructor(private:http:HttpClient) { }


  getData():Observable<any>{
    return this.http.get('https://649ecbd6245f077f3e9ce820.mockapi.io/crud')
    // return this.http.get('http://192.168.2.105:8000/api/books')
  }

  postData(data : any){
    return this.http.post('https://649ecbd6245f077f3e9ce820.mockapi.io/crud' , data)
  }

  deleteData(personId: string): Observable<any> {
    return this.http.delete(`https://649ecbd6245f077f3e9ce820.mockapi.io/crud/${personId}`);
  }
  
  updateData(personId: string , data: any): Observable<any> {
    return this.http.put(`https://649ecbd6245f077f3e9ce820.mockapi.io/crud/${personId}`,data);
  }
  

}
