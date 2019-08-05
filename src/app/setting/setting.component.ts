import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])],
})


export class SettingComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Cidade', 'Código', 'País',];
  expandedElement: PeriodicElement | null;
  city: string;
  code: string;
  weather;
  constructor(private weatherService: WeatherService){
    
  }

  ngOnInit() {
    
  }

  getForecast(cityCode){
    var code = cityCode.Código;
    this.weatherService.getForecast(code)
      .subscribe(
        res => {
          debugger;
          console.log(res);
          this.weather = res;
          //@ts-ignore
          ELEMENT_DATA[0].Cidade = res.city.name;
          //@ts-ignore
          ELEMENT_DATA[0].dia1 = `Dia ${new Date(res.list[0].dt_txt).toLocaleDateString()} Mín.: ${res.list[0].main.temp_min} Máx.: ${res.list[0].main.temp_max}`;
          //@ts-ignore
          ELEMENT_DATA[0].dia2 = `Dia ${new Date(res.list[8].dt_txt).toLocaleDateString()} Mín.: ${res.list[8].main.temp_min} Máx.: ${res.list[8].main.temp_max}`;
          //@ts-ignore
          ELEMENT_DATA[0].dia3 = `Dia ${new Date(res.list[16].dt_txt).toLocaleDateString()} Mín.: ${res.list[16].main.temp_min} Máx.: ${res.list[16].main.temp_max}`;
          //@ts-ignore
          ELEMENT_DATA[0].dia4 = `Dia ${new Date(res.list[24].dt_txt).toLocaleDateString()} Mín.: ${res.list[24].main.temp_min} Máx.: ${res.list[24].main.temp_max}`;
          //@ts-ignore
          ELEMENT_DATA[0].dia5 = `Dia ${new Date(res.list[32].dt_txt).toLocaleDateString()} Mín.: ${res.list[32].main.temp_min} Máx.: ${res.list[32].main.temp_max}`;
        },
        err => {
          console.log(err)
        }
      )
  }

}
var ELEMENT_DATA: PeriodicElement[] = [
  {
    Cidade: 'Moscow',
    Código: 524901,
    País: 'RU',
    dia1: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    dia2: '',
    dia3: '',
    dia4: '',
    dia5: ''
  }];
export interface PeriodicElement {
  Cidade: string;
  Código: number;
  País: string;
  dia1: string;
  dia2: string;
  dia3: string;
  dia4: string;
  dia5: string;
}