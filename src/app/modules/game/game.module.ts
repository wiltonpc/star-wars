import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';
import { GameRoutingModule } from './game-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaterialModule } from 'src/app/material.module';
import { NgxLoadingModule } from "ngx-loading";
import { DialogInfoComponent } from './characters/dialog-info/dialog-info.component';
import { DialogWinnerComponent } from './card/dialog-winner/dialog-winner.component';
import { AppService } from 'src/app/app.service';


@NgModule({
	declarations: [
		CardComponent,
		CharactersComponent,
		DialogInfoComponent,
		DialogWinnerComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		GameRoutingModule,
		MatProgressBarModule,
		MaterialModule,
		NgxLoadingModule.forRoot({})
	],
	exports: [],
	providers: [AppService],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class GameModule {}
