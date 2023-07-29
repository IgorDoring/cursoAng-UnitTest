import { Component } from '@angular/core';
import {Investiments} from "../../model/investiments";
import {ListInvestimentsService} from "../../services/list-investiments.service";

@Component({
  selector: 'app-investiment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public investiments!: Array<Investiments>;
  constructor(private listInvestimentsService: ListInvestimentsService) {
  }

  ngOnInit(): void{
    this.listInvestimentsService.list().subscribe((res) => this.investiments = res);
  }
}
