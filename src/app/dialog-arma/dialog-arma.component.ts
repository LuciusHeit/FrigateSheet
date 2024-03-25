import { Component, OnInit } from '@angular/core';
import {Arma} from "../types";

@Component({
  selector: 'app-dialog-arma',
  templateUrl: './dialog-arma.component.html',
  styleUrls: ['./dialog-arma.component.css']
})
export class DialogArmaComponent implements OnInit {
  data: Arma = {
    nome: "",
    gittata: "",
    danni: 0,
    rateo: 0,
    attacchi: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {
    this.data.nome = "";
  }
}
