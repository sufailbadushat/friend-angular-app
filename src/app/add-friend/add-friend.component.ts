import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  constructor(private api: ApiServicesService) { }

  readValues = () => {
    let data: any = { "name": this.name, "friendName": this.friendName, "friendNickName": this.friendNickName, "DescribeYourFriend": this.DescribeYourFriend }
    console.log(data)
    this.api.addFriends(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == "success") {
          alert("Successfully added...!");
          this.name = ""
          this.friendName = ""
          this.friendNickName = ""
          this.DescribeYourFriend = ""

        } else {
          alert("Something went wrong...!");
        }
      }
    )
  }
}

