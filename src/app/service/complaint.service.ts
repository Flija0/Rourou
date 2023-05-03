import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from '../model/complaint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  baseUrl: string = '/api';

  constructor(private httpd: HttpClient) {}

  addComplaint(complaint: Complaint) {
    console.log(this.baseUrl);
    return this.httpd.post<Complaint>(
      `${this.baseUrl}/addComplaint`,
      complaint
    );
  }

  getComplaints(): Observable<Complaint[]> {
    return this.httpd.get<Complaint[]>(`${this.baseUrl}/getComplaints`);
  }

  deleteComplaint(idComplaint: number) {
    return this.httpd.delete(`${this.baseUrl}/${idComplaint}`);
  }

  updateComplaint(complaint: Complaint) {
    return this.httpd.put<Complaint>(
      `${this.baseUrl}/${complaint.idComplaint}`,
      complaint
    );
  }
}
