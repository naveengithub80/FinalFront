import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private baseUrl = 'http://localhost:8070/api/v1/attendance';

  constructor(private http: HttpClient) {}

  recordAttendance(attendance: any[]): Observable<any> {
    return this.http.post(this.baseUrl, attendance);
  }
}
