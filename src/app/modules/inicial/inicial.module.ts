import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home/home.component';
import { InicialRoutingModule } from './inicial-routing.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InicialRoutingModule,
		MaterialModule
	],
	providers: []
})
export class InicialModule {}
