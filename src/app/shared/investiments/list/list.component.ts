import { Component } from '@angular/core';
import {Investiments} from "../model/investiments";

@Component({
  selector: 'app-investiment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public investiments: Array<Investiments> = [
    {name: "Itaú", value: 100},
    {name: "BB", value: 100},
    {name: "Santander", value: 100},
    {name: "Nubank", value: 100},
  ]
}
