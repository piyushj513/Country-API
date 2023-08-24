import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DjangoService {
  private baseUrl = 'http://127.0.0.1:8000/api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  getTask(id: number) {
    return this.http.get(`${this.baseUrl}/tasks/${id}/`);
  }

  createTask(task: any) {
    return this.http.post(`${this.baseUrl}/tasks/`, task);
  }
  setComplete(id: number) {
    return this.http.get(`${this.baseUrl}/tasks/${id}/`);
  }
}
