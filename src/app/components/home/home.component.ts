import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order-model';
import { LoaderService } from 'src/app/services/loader.service';
import { ModalService } from 'src/app/services/modal.service';
import { OrdersService } from 'src/app/services/orders.service';
import { _data } from './home.data'
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  orderError: string = '';
  orderSended: boolean = false;

  constructor(private loader: LoaderService,
    private modal: ModalService,
    private orderService: OrdersService) { this.data = _data; }

  ngOnInit(): void {
  }

  order: OrderModel = new OrderModel();
  

  smoothScroll(id: string){
    if(!id) return;
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
  });
  }

  showModal(id: string){
    this.modal.showModal(id)
    this.orderSended = false;
  }

  hideModal(id: string){
    this.modal.hideModal(id);
    this.orderSended = false;
  }

  toggleModal(id: string){
    $(id).toggleClass('es-modal-show');
    this.orderSended = false;
  }

  sendOrder(){
    if(!this.order.clientName || this.order.clientName.length < 2){
      this.orderError = 'Не заполнено имя'
      return
    }
    else if(!this.order.phone || this.order.phone.length != 10){
      this.orderError = 'Не заполнен номер телефона'
      return
    }    

    else if(this.order.comment && this.order.comment.length > 300){
      this.orderError = 'Комментарий слишком длянный'
      return
    }

    this.orderError = '';
    this.loader.showLoader();
    this.orderService.addOrder(this.order).subscribe(data => {
      this.loader.hideLoader();
      if(data.code != 0)
        this.orderError = 'Не удалось сохраить заявку. Попробуйте позже'
      else
        this.orderSended = true;
    })

  }
  
}
