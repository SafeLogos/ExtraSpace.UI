import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  whyImages: any[] = [
   { imgPath: '../../../assets/images/icons/online-payment.png', title: 'Онлайн оплата и бронирование' },
   { imgPath: '../../../assets/images/icons/cleaning.png', title: 'Чистота и сухоть в помещениях' },
   { imgPath: '../../../assets/images/icons/biometrical.png', title: 'Биометрический доступ' },
   { imgPath: '../../../assets/images/icons/packing.png', title: 'Коробки и упаковочные материалы' },
   { imgPath: '../../../assets/images/icons/moving.png', title: 'Услуги упаковки и переезда' },
   { imgPath: '../../../assets/images/icons/warhouse.png', title: 'Современные и удобные склады' }
  ]

  services: any[] = [
    {  title:'Наши боксы', img: '../../../assets/images/services/door.png', additionalInfoLink: '#test'},
    {  title:'Облачное хранилище', additionalInfoLink: null},
    {  title:'Безопасность', additionalInfoLink: null},    
  ]

  preorders: any[] = [
    { src: '../../../assets/images/orders-description/1_order.png', size: 1, active: true },
    { src: '../../../assets/images/orders-description/2_order.png', size: 2, active: false },
    { src: '../../../assets/images/orders-description/3_order.png', size: 8, active: false },
    { src: '../../../assets/images/orders-description/4_order.png', size: 15, active: false }
  ]

  monthRows: any[] = [
    { months: [1, 2, 3, 5] },
    { months: [6, 7, 9, 12] }
  ]
  activeMonth: number = 1;

  constructor() { }

  ngOnInit(): void {
  }


  smoothScroll(id: string){
    if(!id) return;
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
  });
  }


  setActiveSize(size){
    this.preorders.forEach(p => p.active = false)
    this.preorders.find(p => p == size).active = true;
  }
}
