import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { BackendApiService } from './services/backend-api.service';
import { CidadeEntityComponent } from './shared/cidade-entity/cidade-entity.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  weather;
  cidades;
public orlw2: any;
  constructor(private weatherService: WeatherService, private apiBackendService : BackendApiService){

  }
  ngOnInit(){
   
  }
  getCidades() {
  
  this.apiBackendService.getCidades()
  .subscribe(
    res  =>{      
      console.log(res);
      this.cidades = res;
      debugger;
    },
    err => {
      debugger;
      console.log(err);
    },
    () =>{
      debugger;
    })
}

postCidade(nomeCidade: HTMLElement, pais: HTMLElement, codigoCidade: HTMLElement){
this.getCidades();
var x = +codigoCidade.innerHTML;
var cidade = new CidadeEntityComponent(nomeCidade.innerHTML, pais.innerHTML, x);
this.apiBackendService.postCidade(cidade)
            .subscribe(res  =>{              
              console.log(res);
              debugger;
            },
            err =>{
              console.log(err);
              debugger;
            });
debugger;
}
  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res},
        err => {
          console.log(err);
          if (err.status == "404")
            alert('Cidade não encontrada');
        }
      ) 
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    if (cityName.value && countryCode.value){
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    }else{
      alert('Favor preencher todos os campos');
    }


    cityName.focus();
    return false;
  }

 
}
