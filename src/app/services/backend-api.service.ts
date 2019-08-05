import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { CidadeEntityComponent } from '../shared/cidade-entity/cidade-entity.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  URI: string = '';
   
  constructor(private httpClient : HttpClient) { 
    this.URI = `https://localhost:44379/api/`;
  }

  public getCidades<T>(){
    return this.httpClient.get<CidadeEntityComponent[]>(`${this.URI}Cidades`);
            
  }

  public postCidade<T> (cidade : CidadeEntityComponent): Observable<T>{
    return this.httpClient.post<T>(`${this.URI}Cidades`, cidade, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'})})        
  }
}
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}
