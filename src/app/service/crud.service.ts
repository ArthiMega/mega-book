import { HttpClient,HttpEvent, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root' 
})
export class CRUDService {
  private baseURL = 'http://localhost:3000/';
  todo = null;
  //userInfo = [{"name":"Arthi","rent":5500},{"name":"dhivya","rent":5500}]
  

  constructor(private http: HttpClient) {
    
   }
  getUserInfo():Observable<User[]>{
    console.log('getUser '+ this.baseURL + ' user-data');
    return this.http.get<User[]>(this.baseURL+'user-data')
  }
  addUser(user:User):Observable<any>{
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseURL+'user',body,{'headers':headers})
  }
  getAllVidios(){
    return this.http.get(this.baseURL);
  }
  getAllBooks(){
    return this.http.get(this.baseURL+'books');
  }
  saveData(inputData:any){
    this.http.post(this.baseURL, inputData);
  }
  videoGetByCode(code:any){
    this.http.get(this.baseURL +"/"+ code);
  }
  removeVideo(code:any){
    this.http.delete(this.baseURL +"/"+code);
  }
  //new
  postUser(data:any){
    return this.http.post<any>(this.baseURL+'user-data',data).pipe(map((res:any)=>{
      return res;
    }))
  }
  
  uploadfile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseURL}/v_data`);
  }
}
 