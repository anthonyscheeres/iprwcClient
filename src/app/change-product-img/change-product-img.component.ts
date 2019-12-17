import { Component, OnInit } from '@angular/core';
import { changeImg } from '../services/product';

@Component({
  selector: 'app-change-product-img',
  templateUrl: './change-product-img.component.html',
  styleUrls: ['./change-product-img.component.css']
})
export class ChangeProductImgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeImg(event) {
    var target = event.target
    var img = target.querySelector('#file-input').value
    var id;
    changeImg(img, id);
  }
}
