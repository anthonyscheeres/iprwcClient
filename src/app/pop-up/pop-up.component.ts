import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from '../models/ProductModel';
import { addProduct } from '../services/product';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  closeResult: string;
  @Input() product: ProductModel;

  ngOnInit() {
  }

  constructor(private modalService: NgbModal) { }


  open() {
    addProduct(this.product)
  }

  
}
