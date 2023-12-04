import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  columnDefs = [
    { field: 'username' },
    { field: 'first_name' },
    { field: 'middle_name' },
    { field: 'last_name' },
    { field: 'age' },
    { field: 'active' },
    { field: 'member_since' },
    { field: 'sex' },
    { field: 'status' }
  ];

  rowData: any[] = []; // This will be populated with your JSON data

  constructor(private userService: UserService) {}


  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      data => {
        this.rowData = data;
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );


  }
}
