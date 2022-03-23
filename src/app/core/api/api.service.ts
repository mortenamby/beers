import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerDTO } from './beer-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public createBeer(beer: BeerDTO) {
    return this.httpClient.post<BeerDTO>('https://reqres.in/api/users', beer);
  }
  public getBeers() {
    // return this.httpClient.get('https://reqres.in/api/animals/')
    return this.httpClient.get<BeerDTO[]>('https://api.punkapi.com/v2/beers')
  }
  private updateBeer() {}
  private deleteBeer() {}
}
