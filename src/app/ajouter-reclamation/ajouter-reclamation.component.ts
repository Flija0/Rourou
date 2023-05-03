import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../service/complaint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css'],
})
export class AjouterReclamationComponent implements OnInit {
  complaint!: Complaint;

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.complaint = new Complaint();
  }

  OnSubmit(recForm: any) {
    this.complaint = recForm.value;
    this.complaint.state = 'pending';
    this.complaint.date = new Date()
      .toLocaleDateString()
      .replace(/\//g, '-')
      .split('-')
      .reverse()
      .join('-')
      .toString();
    this.complaintService.addComplaint(recForm.value).subscribe();
    window.location.reload();
  }
}
