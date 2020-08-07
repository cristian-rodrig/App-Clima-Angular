import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import {map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  
  weather:any;

  constructor(private weatherService: WeatherService){
    
  }

  ngOnInit(){
   
  }

  getWeather(nombreCiudad: string, codigoCiudad: string){
    this.weatherService.getWeather(nombreCiudad, codigoCiudad)
    .subscribe(clima=> { 
        console.log(clima);
        this.weather = clima
      },
      err => console.log(err)
    )
  }

  submitLocation(nombreCiudad: HTMLInputElement, codigoCiudad: HTMLInputElement){
    if(nombreCiudad.value.length===0 || codigoCiudad.value.length===0){
      alert('Los campos son requeridos');      
      nombreCiudad.focus();
    }
    this.getWeather(nombreCiudad.value, codigoCiudad.value)
    nombreCiudad.value ='';
    codigoCiudad.value='';
    nombreCiudad.focus();
    return false;
  }

}
