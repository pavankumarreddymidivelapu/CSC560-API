import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud';

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(data => {
        console.log('All Users:', data);
      });
  }

  submitData(value: any) {
    // Assuming value is the data you want to post
    const postData = {
      name: value.name,
      age: value.age
      // Add other properties as needed
    };

    this.userService.postData(postData)
      .subscribe(response => {
        console.log('Data posted successfully:', response);
        
        // After posting, you might want to fetch and log the updated data
        this.userService.getAllUsers()
          .subscribe(updatedData => {
            console.log('Updated data:', updatedData);
          });
      }, error => {
        console.error('Error posting data:', error);
      });
  }
}
