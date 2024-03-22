import { Injectable } from '@angular/core';

export type User = { id: number, name: string, age: number };


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
