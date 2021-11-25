import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public showLoader(){
    $('.loader-main').show()
  }

  public hideLoader(){
    $('.loader-main').hide()
  }

}
