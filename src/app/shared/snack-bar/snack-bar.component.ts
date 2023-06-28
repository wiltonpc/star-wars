import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {  

  constructor() { }
  ngOnInit(): void {}

  public static showSuccess(snackBar: MatSnackBar, message?:string, buttonText?:string): void {
		buttonText = buttonText ? buttonText : 'X';
		message = message ? message : 'Operação realizada com sucesso.';
		snackBar.open(message, buttonText, {
			verticalPosition: 'top',
			duration: 2000,			
			panelClass: ['snackBar-success']
		});
	}

	public static showError(snackBar: MatSnackBar, errorResponse?:any, message?:string, buttonText?:string): void {
		if (errorResponse && errorResponse.error.errors){
			message = errorResponse.error.errors.join([',']);
		}

		if (!message || message == ""){
			if (errorResponse.error){
				message = errorResponse.error.message;
			}
		}

		message = message ? message : 'Falha ao realizar operação.';
		buttonText = buttonText ? buttonText : 'X';
		snackBar.open(message, buttonText, {
			duration: 2000,
			verticalPosition: 'top',
			panelClass: ['snackBar-error']
		});
	}	

	public static showAlert(snackBar: MatSnackBar, message?:string, buttonText?:string): void {
		buttonText = buttonText ? buttonText : 'X';
		message = message ? message : 'Operação em alerta.';
		snackBar.open(message, buttonText, {
			duration: 2000,
			verticalPosition: 'top',
			panelClass: ['snackBar-alert']
		});
	}	
	

	public static showInfo(snackBar: MatSnackBar, message?:string, buttonText?:string): void {
		message = message ? message : 'Informações para esta Operação.';
		buttonText = buttonText ? buttonText : 'X';
		snackBar.open(message, buttonText, {
			duration: 2000,
			verticalPosition: 'top',
			panelClass: ['snackBar-info']
		});
	}	
}
