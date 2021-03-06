import { Component, OnInit } from '@angular/core';
import { User } from "../classes/user";
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.route.paramMap.subscribe(p => {
      this.user = this.userService.getUser(+p.get('id'));

    });
  }
  backToUsers(){
    this.router.navigate(['users']);
  }
}