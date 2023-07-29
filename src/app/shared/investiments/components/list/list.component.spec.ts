import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Investiments} from "../../model/investiments";
import {MOCK_LIST} from "../../services/list-investiments.mock";
import {ListInvestimentsService} from "../../services/list-investiments.service";
import {of} from "rxjs";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;
  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) - deve listar investimentos', function () {
    spyOn(service, "list").and.returnValue(of(MOCK_LIST));
    component.ngOnInit();
    fixture.detectChanges();
    let investiments = component.investiments;

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toEqual(5);

    expect(investiments[0].name).toEqual("Banco 1");
    expect(investiments[0].value).toBe(100);
    expect(investiments[4].name).toEqual("Banco 5");
    expect(investiments[4].value).toBe(100);
  });


  it('(I) - deve listar investimentos', function () {
    spyOn(service, "list").and.returnValue(of(MOCK_LIST));

    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toBe(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
