import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  
  title = 'star-wars';
  public opened: boolean = true;
  constructor(
		
	) {}
 
  ngOnInit(){
	
	}

  ngAfterViewInit() {
    
  }
  
}
