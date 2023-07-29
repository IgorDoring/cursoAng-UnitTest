import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('(U) - should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) - should poupanca start with 10 - banking.component', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) - should carteira start with 50 - banking.component', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) - setSacar() deve transferir dinheiro da poupanca para a carteira', function () {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) - setDepositar() deve transferir dinheiro da carteira para a poupanca', function () {
    component.setDepositar('50');
    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  });

  it('(U) - setSacar() deve transferir valor se poupanca nao conter string e nao for menor que valor requisitado', function () {
    expect(component.setSacar("string")).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) - setDepositar() deve transferir valor se deposito nao conter string e nao for menor que valor requisitado', function () {
    expect(component.setDepositar("string")).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(I) - setDepositar() deve transferir dinheiro da carteira para a poupanca', function () {
    let el = fixture.debugElement.nativeElement;
    el.querySelector("#depositarInput").value = 10;
    el.querySelector("#depositarButton").click();
    fixture.detectChanges();

    expect(el.querySelector("#poupanca").textContent).toEqual('20');
    expect(el.querySelector("#carteira").textContent).toEqual('40');

    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  });

  it('(I) - setSacar() deve transferir dinheiro da poupanca para a carteira', function () {
    let el = fixture.debugElement.nativeElement;
    el.querySelector("#sacarInput").value = 10;
    el.querySelector("#sacarButton").click();
    fixture.detectChanges();

    expect(el.querySelector("#poupanca").textContent).toEqual('0');
    expect(el.querySelector("#carteira").textContent).toEqual('60');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });
});
