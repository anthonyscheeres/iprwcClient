import { Component, OnInit } from '@angular/core';
import { DataModel } from '../models/DataModel';

@Component({
  selector: 'app-change-img-admin',
  templateUrl: './change-img-admin.component.html',
  styleUrls: ['./change-img-admin.component.css']
})
export class ChangeImgAdminComponent implements OnInit {

  hasSuper: boolean = !DataModel.account.hasSuperPermission;
  constructor() { }

  ngOnInit() {
  }

}
