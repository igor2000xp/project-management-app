import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../board-card/board-card.component';
import { ToolsMenuComponent } from '../tools-menu/tools-menu.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  boardForm: FormGroup;

  returnString: string;

  name: string;

  constructor(
    public dialogRef: MatDialogRef<ToolsMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private searchService: SearchService,
  ) { }

  searchHandler() {

  }


  ngOnInit(): void {
    this.boardForm = new FormGroup({
      returnString: new FormControl('', [Validators.required]),
    });
    this.data.returnString = this.data.name;
  }

  noUpdateClick(): void {
    this.dialogRef.close('Do nothing');
  }


}
