import { Component, OnInit } from '@angular/core';
import { DataModel } from '../models/DataModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hasSuper : boolean= !DataModel.account.hasSuperPermission;

  constructor() { }

  ngOnInit() {
  }

}
