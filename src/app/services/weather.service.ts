import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY = 'b31600c154bce4ec0594b4e93e3d3375'
  URI: string = ""
  constructor(private http: HttpClient) {
    this.URI =`https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&q=`;
   }

   getWeather(cityName: string, countryCode: string){
      return this.http.get(`${this.URI}${cityName},${countryCode}&units=metric`);
   }
}
