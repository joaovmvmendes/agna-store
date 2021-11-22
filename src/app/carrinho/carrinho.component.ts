import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CarrinhoComponent implements OnInit {
  valorTotal: number = 0;
  nomeCli: string = '';
  emailCli: string = '';
  numeroCli: number = 0;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['Produto', 'Quantidade', 'Valor'];
  expandedElement!: ProdutosSelecionados | null;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {}
  openConfirmaDadosDialog(): void {
    const dialogRef = this.dialog.open(ConfirmaDadosDialogComponent, {
      width: '350px',
      data: { nomeCli: this.nomeCli,
              emailCli: this.emailCli,
              numeroCli: this.numeroCli },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.valorTotal = 0;
    this.dataSource.data.forEach(e => {
      this.valorTotal += e.Valor;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Ordenado ${sortState.direction}`);
    } else {
      this._liveAnnouncer.announce('Ordenação apagada');
    }
  }

}

export interface ProdutosSelecionados {
  Produto: string;
  Valor: number;
  Quantidade: number;
  descProd: string;
}

export interface DialogData {
  nomeCli: string;
  emailCli: string;
  numeroCli: number;
}

@Component({
  selector: 'app-confirma-dados-dialog',
  templateUrl: './../sheets-dialogs/confirma-dados-dialog.html',
})

export class ConfirmaDadosDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmaDadosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


const ELEMENT_DATA: ProdutosSelecionados[] = [
  {
    Valor: 13.90,
    Produto: 'Hydrogen',
    Quantidade: 1.079,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
  {
    Valor: 27.50,
    Produto: 'Oxygen',
    Quantidade: 35,
    descProd: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
  },
];
