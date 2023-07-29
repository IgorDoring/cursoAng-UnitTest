import { TestBed } from '@angular/core/testing';

import { ListInvestimentsService } from './list-investiments.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {Investiments} from "../model/investiments";
import {MOCK_LIST} from "./list-investiments.mock";

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const url: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";
  const mockList: Array<Investiments> = MOCK_LIST;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListInvestimentsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) - deve listar todos os investimentos', function (done) {
    service.list().subscribe(
      (res: Array<Investiments>) => {
        expect(res[0].name).toEqual("Banco 1");
        expect(res[0].value).toEqual(100);
        done();
      }
    );
    const req = httpTestingController.expectOne(url);
    req.flush(mockList);

    expect(req.request.method).toEqual("GET");
  });
});
