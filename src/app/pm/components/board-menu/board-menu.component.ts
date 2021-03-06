/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardCardModalComponent } from '../board-card-modal/board-card-modal.component';



@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.scss'],
})
export class BoardMenuComponent implements OnInit {

  ediMode: string;

  constructor(public dialog: MatDialog) { }

  editMode = 'false';

  ngOnInit(): void {
  }

  openColumn() {
    const dialogRef = this.dialog.open(BoardCardModalComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
