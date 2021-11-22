import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {

  descProd = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  valorProd = 13.90;

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(Addprodsheet);
  }

  ngOnInit(): void {

  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: '../sheets-dialogs/add-prod-sheet.html',
})

export class Addprodsheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<Addprodsheet>) {}
}
