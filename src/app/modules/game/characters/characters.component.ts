import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { People } from 'src/app/model/star-wars.interface';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;

	public loading: boolean = false;
	public People: People[] = [];
	public length = 0;
	public pageSize = 10;


	constructor(private appService: AppService, private matSnackBar: MatSnackBar, private matDialog: MatDialog) { }

	ngOnInit(): void {
		this.getMenu(1);
	}

	public getMenu(pageIndex: number) {
		this.loading = true;
		this.appService.get(pageIndex).subscribe({
			next: (data) => {
				this.People = data.results;
				this.length = data.count;
			},
			error: (error) => {
				this.loading = false;
				SnackBarComponent.showSuccess(this.matSnackBar, error?.error.detail, null);
			},
			complete: () => this.loading = false
		});
	}

	public changePage(event: any) {
		const index = event.pageIndex + 1;
		this.getMenu(index);
	}

	public imageExists(name: string) {
		const image = `../../../../assets/images/cards/card-${name}.png`;
		var http = new XMLHttpRequest();
		http.open('HEAD', image, false);
		http.send();
		return http.status != 404;
	}

	public openModal(people: People): void {
		const dialogRef = this.matDialog.open(DialogInfoComponent, {
			width: '80%',
			height: '80%',
			data: people
		});
		dialogRef.afterClosed().subscribe(result => {
			
		});
	}

	

}
