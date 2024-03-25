import {Component, ElementRef, ViewChild} from '@angular/core';
import {DialogArmaComponent} from "./dialog-arma/dialog-arma.component";
import {MatDialog} from "@angular/material/dialog";
import {saveAs} from "file-saver";
import {Character} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frigate';
  armiList = Array();
  invList = Array();
  tatList = Array();

  character: Character = {
    nome: "",
    resistenza: 0,
    riflessi: 0,
    furtivita: 0,
    precisione: 0,
    sensi: 0,
    astuzia: 0,
    memoria: 0,
    tech: 0,
    vitalita: 0,
    vitalitaMax: 0,
    armatura: 0,
    velocita: 0,
    ferito: false,
    status: "",
    armi: null,
    tattiche: null,
    equip: null
  }

  importedFile: File | null = null;

  constructor(public dialog: MatDialog) {
  }

  addArmi() {
    //this.armiList.push(this.armiList.length + 1);
    const dialogRef = this.dialog.open(DialogArmaComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if(!result || result.nome == "") {
        return;
      }
      console.log(result);
      this.armiList.push(result);
    });
  }
  addInv() {
    this.invList.push(this.invList.length + 1);
  }
  addTat() {
    this.tatList.push(this.tatList.length + 1);
  }

  export() {
    if(this.character.nome == "") {
      return;
    }
    return saveAs(
      new Blob([JSON.stringify(this.character, null, 2)], { type: 'JSON' }), this.character.nome+'.json'
    );
  }

  onUpload(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.importedFile = file;
    }

  }

  import() {
    //let jsonObj = JSON.parse(employeeString); // string to "any" object first
    //let employee = jsonObj as Employee;
    console.log(this.importedFile)

    const fileReader = new FileReader();
    // @ts-ignore
    fileReader.readAsText(this.importedFile, "UTF-8");
    fileReader.onload = () => {
      // @ts-ignore
      this.character = JSON.parse(fileReader.result);
      // @ts-ignore
      console.log(JSON.parse(fileReader.result));
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
