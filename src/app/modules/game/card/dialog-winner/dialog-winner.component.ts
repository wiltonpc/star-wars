import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/model/star-wars.interface';



@Component({
	selector: 'app-dialog-winner',
	templateUrl: './dialog-winner.component.html',
	styleUrls: ['./dialog-winner.component.scss']
})
export class DialogWinnerComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<DialogWinnerComponent>,
		@Inject(MAT_DIALOG_DATA) public winner: string
	
	) { }

	ngOnInit() {
		
	}
	public close() {
		this.dialogRef.close();
	}
	
}
