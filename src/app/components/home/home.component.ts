import { Component, OnInit } from '@angular/core';
declare var $: any;

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
    {  title:'Наши боксы', img: '../../../assets/images/services/door.png', slideInfo: ['Сухие отопляемые хранилища','Проветриваемые вентялицией','Удобное центральное расположение складов']},
    {  title:'Облачное хранилище', img: '../../../assets/images/services/boxes.png', slideInfo: ['Цена только за тот объём, который храните', 'Дешевле в разы обычных хранилищ', 'Неограниченное место']},
    {  title:'Безопасность', img: '../../../assets/images/services/lock.png', slideInfo: ['Видеонаблюдение', 'Охрана 24/7', 'Биометрические замки']},    
  ]

  preorders: any[] = [
    { src: '../../../assets/images/orders-description/1_order.png', size: 2, squarePrice: 8000, description: 'Самый маленький по площади хранилище. Идеально подходит для хранения личных вещей (сумки, коробки, чемоданы, резина).' },
    { src: '../../../assets/images/orders-description/2_order.png', size: 4, squarePrice: 7500, description: 'Хранилище среднего размера. Предназначен для небольшого качества среднегабаритной мебели (письменный стол, пианино и огромное количество коробок сверху). '},
    { src: '../../../assets/images/orders-description/3_order.png', size: 8, squarePrice: 7000, description: 'Внушительное хранилище. Спокойно вместит в себя всю мебель одной большой зальной комнаты.' },
    { src: '../../../assets/images/orders-description/4_order.png', size: 15,squarePrice: 6500, description: 'Ангар. В такое хранилище можно завести всю мебель с 4-х комнатной квартиры и оставить машину.' }
  ]
  
  activeDescription: string = 'Самый маленький по площади склад. Идеально подходит для хранения личных вещей (сумки, коробки, чемоданы, резина)';
  activeSquarePrice: number = 8000;
  activePreorderSize: number = 2;

  careImages: any[] = [
    [
      { src: '../../../assets/images/care/care_1.png' },
      { src: '../../../assets/images/care/care_2.png' },
      { src: '../../../assets/images/care/care_3.png' },
      { src: '../../../assets/images/care/care_4.png' }
    ],

    [
      { src: '../../../assets/images/care/care_1.png' },
      { src: '../../../assets/images/care/care_2.png' },
      { src: '../../../assets/images/care/care_3.png' },
      { src: '../../../assets/images/care/care_4.png' }
    ],

    [
      { src: '../../../assets/images/care/care_1.png' },
      { src: '../../../assets/images/care/care_2.png' },
      { src: '../../../assets/images/care/care_3.png' },
      { src: '../../../assets/images/care/care_4.png' }
    ]
  ]

  monthRows: any[] = [
    { months: [1, 2, 3, 5] },
    { months: [6, 7, 9, 12] }
  ]
  activeMonth: number = 1;

  ourClients: any[] = [
    { src: '../../../assets/images/our-clients/client_1.png' },
    { src: '../../../assets/images/our-clients/client_2.png' },
    { src: '../../../assets/images/our-clients/client_3.png' },
    { src: '../../../assets/images/our-clients/client_4.png' }
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

  toggleModal(id: string){
    $(id).toggleClass('es-modal-show');
  }

  changeModal(id: string) {
    $('#orderModal').toggleClass('es-modal-show');
    $(id).toggleClass('es-modal-show');
  }

  
}
