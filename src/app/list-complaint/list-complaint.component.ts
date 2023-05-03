import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';

@Component({
  selector: 'app-list-complaint',
  templateUrl: './list-complaint.component.html',
  styleUrls: ['./list-complaint.component.css'],
})
export class ListComplaintComponent implements OnInit {
  complaints!: any;

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.complaintService.getComplaints().subscribe((complaints) => {
      this.complaints = complaints;
    });
  }

  deleteComplaint(complaint: any) {
    this.complaintService
      .deleteComplaint(complaint.idComplaint)
      .subscribe(() => {
        this.complaints = this.complaints.filter(
          (c: Complaint) => c.idComplaint !== complaint.idComplaint
        );
      });
  }

  updateComplaint(complaint: any) {
    complaint.state = 'treated';
    this.complaintService.updateComplaint(complaint).subscribe(() => {
      this.complaintService.getComplaints().subscribe((complaints) => {
        this.complaints = complaints;
      });
    });
  }
}
