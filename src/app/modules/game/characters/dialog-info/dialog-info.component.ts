import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Film } from 'src/app/model/film.interface';
import { People } from 'src/app/model/star-wars.interface';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
	selector: 'app-dialog-info',
	templateUrl: './dialog-info.component.html',
	styleUrls: ['./dialog-info.component.scss']
})

export class DialogInfoComponent implements OnInit {

	public loading: boolean = false;
	public data: any;
	public acao: string;
	public films: Film[] = [];


	public displayedColumns: string[] = ['title', 'episode_id', 'director', 'producer', 'release_date'];
	public dataSource = [];

	public displayedColumns2: string[] = ['name', 'model', 'manufacturer', 'cost_in_credits', 'max_atmosphering_speed', 'passengers'];
	public dataSource2 = [];

	constructor(
		private appService: AppService,
		private matSnackBar: MatSnackBar,
		public dialogRef: MatDialogRef<DialogInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public people: People,

	) { }

	ngOnInit() {
		this.getFilms();
		this.getVehicles();
	}

	public getFilms() {
		let arrayServicesFilms: Observable<any>[] = []
		this.people.films.forEach(film => {
			arrayServicesFilms.push(this.appService.getGenericService(film));
		});
		this.loading = true;
		forkJoin(arrayServicesFilms).subscribe({
			next: (data) => {
				this.dataSource = data;
			},
			error: (error) => {
				this.loading = false;
				SnackBarComponent.showSuccess(this.matSnackBar, error?.error.detail, null);
			},
			complete: () => this.loading = false
		});
	}

	public getVehicles() {
		let arrayServicesFilms: Observable<any>[] = []
		this.people.vehicles.forEach(Vehicle => {
			arrayServicesFilms.push(this.appService.getGenericService(Vehicle));
		});
		this.loading = true;
		forkJoin(arrayServicesFilms).subscribe({
			next: (data) => {
				this.dataSource2 = data;
			},
			error: (error) => {
				this.loading = false;
				SnackBarComponent.showSuccess(this.matSnackBar, error?.error.detail, null);
			},
			complete: () => this.loading = false
		});
	}

	public close() {
		this.dialogRef.close();
	}

}
