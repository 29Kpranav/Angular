import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  public getSomeData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/endpoint`);
  }

  public postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data);
  }

  // Add more methods for other API requests as needed
}
