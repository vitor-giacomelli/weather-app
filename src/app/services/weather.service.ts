import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string = '';
  URIForecasts: string = '';
  apiKey = 'c48ec3da67fbc0fb1696fb4259c36252';

  constructor(private httpClient : HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=pt&q=`
    this.URIForecasts = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&lang=pt&id=`
  }

  getWeather(cityName : string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }

  getForecast(cityCode : string){
    return this.httpClient.get(`${this.URIForecasts}${cityCode}`)
  }

}
