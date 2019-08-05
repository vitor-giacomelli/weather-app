import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-entity',
  templateUrl: './cidade-entity.component.html',
  styleUrls: ['./cidade-entity.component.css']
})
export class CidadeEntityComponent implements OnInit {

  constructor(nomeCidade: string, pais: string, codigoCidade: number) { 
    this.NomeCidade = nomeCidade;
    this.Pais = pais;
    this.CodigoCidade = codigoCidade;
  }

  NomeCidade: string;
  Pais : string;
  CodigoCidade: number;

  ngOnInit() {
  }

}
