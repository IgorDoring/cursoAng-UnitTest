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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should poupanca start with 10 - banking.component', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('should carteira start with 50 - banking.component', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('setSacar() deve transferir dinheiro da poupanca para a carteira', function () {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('setDepositar() deve transferir dinheiro da carteira para a poupanca', function () {
    component.setDepositar('50');
    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  });
});
