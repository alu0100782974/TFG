import { Component, Input } from '@angular/core';
import { Client } from '../../pojo/clientPojo';


/**
 * Generated class for the NextClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'next-client',
  templateUrl: 'next-client.html'
})
export class NextClientComponent {

  text: string;

  @Input()
  public nextClient: Client;

  constructor() {
  }

}
