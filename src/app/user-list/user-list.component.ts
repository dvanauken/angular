import { CellClickedEvent } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { UserService } from '../user.service'; // Assuming UserService is correctly implemented
import { User } from '../user.model';



@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  columnDefs = [
    { 
      headerName: "User Name",
      field: 'username',
      width: 100,
      onCellClicked: this.onUsernameClicked.bind(this) 
    },
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

  //constructor(private userService: UserService) {}
  constructor(private router: Router, private userService: UserService) {}

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

  onUsernameClicked(event: CellClickedEvent) {
    console.log('Clicked user:', event.data);
    const userData = event.data;
    this.userService.setCurrentUser(userData);
    this.router.navigate(['/app/user-form', userData.username]);
  }
}
