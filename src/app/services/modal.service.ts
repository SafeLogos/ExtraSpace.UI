import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public showModal(id: string){
    $(id).addClass('es-modal-show')
    $('body').css('overflow', 'hidden')
  }

  public hideModal(id: string){
    $(id).removeClass('es-modal-show')
    if($('es-modal-show').length <= 0)
      $('body').css('overflow', 'auto')
  }


}
