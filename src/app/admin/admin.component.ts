import { Component, OnInit } from '@angular/core';
import { DataModel } from '../models/DataModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hasAdmin: boolean = DataModel.account.token != null && DataModel.account.token != "";

  constructor() { }

  ngOnInit() {
  }

}
