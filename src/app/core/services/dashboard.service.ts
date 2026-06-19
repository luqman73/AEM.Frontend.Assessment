import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard() {
    const token = localStorage.getItem('token');

    return this.http.get('http://test-demo.aemenersol.com/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
