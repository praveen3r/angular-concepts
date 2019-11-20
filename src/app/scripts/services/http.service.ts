import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    let returnObj = {};
     returnObj = {"entityList":[
      {"serialNo":1,"userId":"Test UserId1","userName":"Test UserName1", "role":"M"},
      {"serialNo":2,"userId":"Test UserId2","userName":"Test UserName2", "role":"M"}]};
    
    let resp:Observable<any> = new Observable(observer => {
      setTimeout(() => {
          observer.next(returnObj);
      }, 500);
    });
    return resp;
  }

  getWorkFlowInqList(data:any): Observable<any> {
    return this.http.post(environment.WF_INQ_SERVICE, data);
  }

  downloadFile(data:any): Observable<any> {
    return this.http.post(environment.DOWNLOAD_SERVICE, data, {responseType: "arraybuffer"});
  }

}
