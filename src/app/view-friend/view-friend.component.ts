import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {
  
  constructor(private api:ApiServicesService){
    
    api.fetchData().subscribe(
    (response)=>{
      this.friends=response
    }
    )
  }
  
  friends:any=[]


}
