import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

//creating simple objects
salesPersonList : SalesPerson[]=[

new SalesPerson("Arka","Jyoti",'arka@gmail.co',60000),
new SalesPerson("sura","Jyoti",'arka@gmail.co',40000),
new SalesPerson("arnab","Jyoti",'arka@gmail.co',30000),
new SalesPerson("Toushiq","Jyoti",'arka@gmail.co',50000),

];



  constructor() { }

  ngOnInit() {
  }

}