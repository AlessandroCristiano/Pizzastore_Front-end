import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { DataSearchService } from 'src/app/shared/services/data-search.service';
import { ClienteService } from '../cliente.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent {
  constructor(private clienteService: ClienteService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute,
    private dataSearchService: DataSearchService) {}
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>();
  displayedColumns: string[] = ['id', 'nome', 'cognome', 'indirizzo', 'attivo', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getData();
    let operation = this.route.snapshot.queryParamMap.get('search');
    if(operation == 'true') {
      this.dataSource = this.dataSearchService.getData();
    } else {
      this.getData();
      this.router.navigate(['/cliente/list']);
    }
  }

  openDialog(idCliente: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: {idCliente}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clienteService.getAllClienti().subscribe(res => {
        this.dataSource.data = res;
      })
    });
  }


  getData() {
    this.clienteService.getAllClienti().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  showDetail(id: number) {
    this.router.navigate(["cliente/", id], {queryParams: {operation:"readOnly"}});
  }

  onClickDelete(id: number) {
    this.openDialog(id);
  }

  onClickAddNew() {
    this.router.navigate(["cliente/create"], {queryParams: {operation:"add"}});
  }

  onClickUpdate(id: number) {
    this.router.navigate(["cliente/edit/", id], {queryParams: {operation:"edit"}});
  }
}
