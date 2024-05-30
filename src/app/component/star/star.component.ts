import { Component, OnInit, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {
  @Input() rating:number;
  starWidth:number;
  @Output() ratingClicked= new EventEmitter <any>();

  constructor(){
    this.rating=0;
    this.starWidth=this.rating*90/5
  }
  ngOnChanges():void{
    this.starWidth=this.rating*90/5
  }
  ngOnInit(): void {
  }

  onClick():void{
    this.ratingClicked.emit(`Đánh giá sản phẩm là ${this.rating} sao`)
    console.log(`Đánh giá sản phẩm là ${this.rating} sao`);
    
  }
}
