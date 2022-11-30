import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  fetchData = () => {
    return this.http.get("https://dummyapifriends.herokuapp.com/view");
  }
  
  addFriends = (addToData:any) => {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata", addToData);
  }
}
