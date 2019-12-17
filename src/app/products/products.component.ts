import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts } from '../services/product';
import { Router } from '@angular/router';
import { CreateExperimentComponent } from '../create-experiment/create-experiment.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from '../models/AccountModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  static currentlySelectedProduct;
  dataSource = loadProducts();

  constructor(private _router: Router,  private modalService: NgbModal) { }

  ngOnInit() {
    AccountModel.token = localStorage.getItem("token")
  }
  open() {
    const modalRef = this.modalService.open(CreateExperimentComponent);
    modalRef.componentInstance.name = 'World'
  }
}


