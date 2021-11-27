export var _data = {
      whyImages: [
   { imgPath: '../../../assets/images/icons/online-payment.png', title: 'Онлайн оплата и бронирование' },
   { imgPath: '../../../assets/images/icons/cleaning.png', title: 'Чистота и сухоть в помещениях' },
   { imgPath: '../../../assets/images/icons/biometrical.png', title: 'Биометрический доступ' },
   { imgPath: '../../../assets/images/icons/packing.png', title: 'Коробки и упаковочные материалы' },
   { imgPath: '../../../assets/images/icons/moving.png', title: 'Услуги упаковки и переезда' },
   { imgPath: '../../../assets/images/icons/warhouse.png', title: 'Современные и удобные склады' }
  ],

  services: [
    {  title:'Наши боксы', img: '../../../assets/images/services/door.png', slideInfo: ['Сухие отопляемые хранилища','Проветриваемые вентялицией','Удобное центральное расположение складов']},
    {  title:'Облачное хранилище', img: '../../../assets/images/services/boxes.png', slideInfo: ['Цена только за тот объём, который храните', 'Дешевле в разы обычных хранилищ', 'Неограниченное место']},
    {  title:'Безопасность', img: '../../../assets/images/services/lock.png', slideInfo: ['Видеонаблюдение', 'Охрана 24/7', 'Биометрические замки']},    
  ],

  preorders: [
    { src: '../../../assets/images/orders-description/1_order.png', size: 2, squarePrice: 8000, description: 'Самый маленький по площади хранилище. Идеально подходит для хранения личных вещей (сумки, коробки, чемоданы, резина).' },
    { src: '../../../assets/images/orders-description/2_order.png', size: 4, squarePrice: 7500, description: 'Хранилище среднего размера. Предназначен для небольшого качества среднегабаритной мебели (письменный стол, пианино и огромное количество коробок сверху). '},
    { src: '../../../assets/images/orders-description/3_order.png', size: 8, squarePrice: 7000, description: 'Внушительное хранилище. Спокойно вместит в себя всю мебель одной большой зальной комнаты.' },
    { src: '../../../assets/images/orders-description/4_order.png', size: 15,squarePrice: 6500, description: 'Ангар. В такое хранилище можно завести всю мебель с 4-х комнатной квартиры и оставить машину.' }
  ],
  
  activeDescription: 'Самый маленький по площади склад. Идеально подходит для хранения личных вещей (сумки, коробки, чемоданы, резина)',
  activeSquarePrice: 8000,
  activePreorderSize: 2,

  careImages: [
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
  ],

  monthRows: [
    { months: [1, 2, 3, 5] },
    { months: [6, 7, 9, 12] }
  ],
  activeMonth: 1,

  ourClients: [
    { src: '../../../assets/images/our-clients/client_1.png' },
    { src: '../../../assets/images/our-clients/client_2.png' },
    { src: '../../../assets/images/our-clients/client_3.png' },
    { src: '../../../assets/images/our-clients/client_4.png' }
  ],

  priceList: [
      { type: 'XXXS', place: '2,5м²', price: 8000, price1: 20000, price3: 60000, price6: 120000, price12: 240000 },
      { type: 'XXS', place: '3,5м²', price: 8000, price1: 28000, price3: 840000, price6: 168000, price12: 336000 },
      { type: 'XS', place: '4,5м²', price: 8000, price1: 36000, price3: 108000, price6: 216000, price12: 432000 },
      { type: 'S', place: '6м²', price: 7500, price1: 45000, price3: 135000, price6: 270000, price12: 540000 },
      { type: 'M', place: '8м²', price: 7000, price1: 56000, price3: 168000, price6: 336000, price12: 672000 },
      { type: 'M+', place: '10м²', price: 6500, price1: 65000, price3: 195000, price6: 390000, price12: 780000 },
      { type: 'L', place: '12м²', price: 6500, price1: 78000, price3: 234000, price6: 468000, price12: 936000 },
      { type: 'XL', place: '15м²', price: 6500, price1: 97500, price3: 292500, price6: 585000, price12: 1170000 },
      { type: 'XXL', place: '18м²', price: 6500, price1: 117000, price3: 351000, price6: 702000, price12: 1404000 },
      { type: 'XXXL', place: '22м²', price: 6500, price1: 143000, price3: 459000, price6: 858000, price12: 1716000 }
  ]

}