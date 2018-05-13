import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class ContactService {
    
  constructor(private http: HttpClient) {}
   
  private apiurl = environment.apiurl;
  
  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaHNrZWVAeWFob28uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTI2MTU0ODA0LCJleHAiOjMxNTU1MjYxNTQ4MDR9.Sac4KgisLlJjknCVrPSK8YU5wusu0I69OlffwcEcJho';
  
  listContacts(){
    return this.http.get(this.apiurl + '/api/contacts?token='+this.token);
  }

  getContact(id){
    return this.http.get(this.apiurl + '/api/contacts/read/' + id+'?token='+this.token);
  }
  
  createContact(contactObj) { 
    return this.http.post(this.apiurl + '/api/contacts/create?token='+this.token, contactObj);
  }

  deleteContact(id) {
    return this.http.delete(this.apiurl + '/api/contacts/delete/'+id+'?token='+this.token);
  }

  updateContact(contactObj) {
    return this.http.put(this.apiurl + '/api/contacts/update?token='+this.token, contactObj);
  }

}