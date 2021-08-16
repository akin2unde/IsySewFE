import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products=
  [
     {
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Derbys_Peter_Pan_peanut_butter_sample_blikje%2C_foto3.JPG"}],
      price:50432,
      categories:[],
      isHighlight:false

    },
    {
      name:"Juice Juicy",
      code:"Y623201",
      description:"",
      images:[{url:"https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg"}],
      price:70432,
      categories:[],
      isHighlight:false
    },
    {
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"https://identity-mag.com/wp-content/uploads/2017/07/cover.jpg"}],
      price:80432,
      categories:[],
      isHighlight:false
    },
    {
      name:"Beauty Product",
      code:"Y523201",
      description:"",
      images:[{url:"https://assets.entrepreneur.com/content/3x2/2000/1396394917-10-innovative-beauty-products-disrupt-morning-beauty-routine.jpg"}],
      price:90432,
      categories:[],
      isHighlight:false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  hoverListItem(item:Product) {
    item.isHighlight = ! item.isHighlight;
 }

}
