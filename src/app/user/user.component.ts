import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('publicEventUpdateUser') privateEventUpdateUser = new EventEmitter(); 
  @Output('publicEventDeleteUser') privateEventDeleteUser = new EventEmitter(); 
  @Output('evidenziatore') evidenziaUser = new EventEmitter(); 

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    
  }

  updateUserChild(){
    this.route.navigate(['user', this.user.id, 'edit']);
    this.privateEventUpdateUser.emit(this.user);
  }

  deleteUserChild(){ 
    this.privateEventDeleteUser.emit(this.user);
  }

    showUserDetail(){
      this.route.navigate(['user', this.user.id]);
  }

  colora(){
    this.evidenziaUser.emit(this.user);
  }

}