import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  _users$!: Observable<User[]>;
  constructor(private _users: UsersService) { }

  ngOnInit(): void {
    this._users$ = this._users.getUsers();
  }
}
