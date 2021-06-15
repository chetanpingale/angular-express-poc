import {Component, Input, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api: DashboardService) { }
  @Input() name = 'My name';
  users: any;
  // users: Object[] = [];

  ngOnInit(): void {
    this.api.getData().subscribe((details) => {
      this.users = details.data;
    })
  }

}
