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
    return this.http.get(environment.USER_LIST_SERVICE);
  }

  getWorkFlowInqList(data:any): Observable<any> {
    return this.http.post(environment.WF_INQ_SERVICE, data);
  }

  downloadFile(data:any): Observable<any> {
    return this.http.post(environment.DOWNLOAD_SERVICE, data, {responseType: "arraybuffer"});
  }

}
