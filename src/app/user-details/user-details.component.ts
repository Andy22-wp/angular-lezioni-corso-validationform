import { Component, OnInit, Input } from "@angular/core";
import { User } from "../classes/user";
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  private userCopy: User;
  private __user: User;
  @Input() set user(user: User){
    this.userCopy = Object.assign({}, user);
    this.__user = user;
  }

  get user(){
    return this.__user;
  }
  
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe(params => {
      if(!params.id){
        return;
      }
      this.user = this.userService.getUser(+params.id);

    });
  }

  saveUser() {
    //alert(this.user.id);
    if(this.user.id > 0){
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
//passare 'form' adesso non è necessario ma mi mostra che potrei passare un parametro f.form dal pulsante reset
  resetUser(form){  
    if(this.user.id === 0){
      this.user = new User();
    } else {
        this.user = this.userCopy;
    }
  }

  backToUsers(){
    this.router.navigate(['users']);
  }
  
}
