import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {
	
	private url: string = 'https://swapi.dev/api/people/';

	constructor (
		private http: HttpClient,
	) { }
	
	public get(pageIndex: number): Observable<any> {
		return this.http.get<any>(`${this.url}?page=${pageIndex}`)
	}

	public getMock(force: string): Observable<any> {
		return this.http.get<any>(`../assets/${force}.json`)
	}

	public getGenericService(url: string): Observable<any> {
		return this.http.get<any>(`${url}`)
	}
}
