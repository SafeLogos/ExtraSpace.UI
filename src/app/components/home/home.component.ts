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

  constructor() { }

  ngOnInit(): void {
  }


  smoothScroll(id: string){
    if(!id) return;
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
  });
  }

}
