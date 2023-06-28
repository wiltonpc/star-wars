import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';
import { People } from 'src/app/model/star-wars.interface';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { DialogWinnerComponent } from './dialog-winner/dialog-winner.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	public listJedi: People[];
	public listSith: People[] ;
	public jedi: People[] ;
	public sith: People[] ;
	public resultJedi: People[] ;
	public resultSith: People[] = [];
	public totalJedi: number ;
	public totalSith: number;

	public loading: boolean = false;

	constructor(private appService: AppService, private matSnackBar: MatSnackBar, private matDialog: MatDialog) { }

	ngOnInit(): void {
		this.start();
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex,
			);
		}
	}

	public getMock(force: string) {
		this.loading = true;
		this.appService.getMock(force).subscribe({
			next: (data) => {
				if (force == 'jedi') {
					this.listJedi = data;
				} else if (force == 'sith') {
					this.listSith = data;
				}
			},
			error: (error) => SnackBarComponent.showError(this.matSnackBar, null, error),
			complete: () => this.loading = false
		});
	}

	public matchCard() {
		let message: string = '';
		let jedi = this.jedi[0];
		let sith = this.sith[0];
		const Totaljedi = jedi.force.ability + jedi.force.ability;
		const Totalsith = sith.force.ability + sith.force.ability;
		if(Totaljedi >= Totalsith) {
			message = jedi.name + " Won";
			jedi.force.winner = true;
			sith.force.winner = false;
			this.totalJedi ++;
		} else  {
			message = sith.name + " Won";
			jedi.force.winner = false;
			sith.force.winner = true;
			this.totalSith ++;
		}
		this.resultJedi.push(this.jedi[0]);
		this.resultSith.push(this.sith[0]);
		this.jedi = [];
		this.sith = [];
		
		if(this.listJedi.length == 0 && this.listSith.length == 0){
			const winner = (this.totalJedi >= this.totalSith ? 'jedi':'sith');
			this.openModal(winner);
		} else {
			SnackBarComponent.showSuccess(this.matSnackBar, message, null);

		}
	}

	public openModal(winner: string): void {
		const dialogRef = this.matDialog.open(DialogWinnerComponent, {
			width: '650px',
			height: '440px',
			data: winner
		});
		dialogRef.afterClosed().subscribe(result => {
			this.start();
		});
	}

	private start() {
		this.listJedi = [];
		this.listSith = [];
		this.jedi = [];
		this.sith = [];
		this.resultJedi = [];
		this.resultSith = [];
		this.totalJedi = 0;
		this.totalSith = 0;
		this.getMock('jedi');
		this.getMock('sith');
	}

}
