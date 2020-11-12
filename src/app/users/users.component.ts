import {Component, EventEmitter,  OnInit, Output} from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  users: User[] = [];
  @Output('publicOnSelectedUser') privateOnSelectedUser = new EventEmitter<User>();

  constructor(private service: UserService){
  }
  /*
  posso usare questo metodo perchè sono certo che verrà letto solo quando il componente è
  stato caricato (vedi hooks da usare per gestire gli eventi durante il ciclo di vita dei componenti)
  */
  ngOnInit(){
    this.users = this.service.scriviDati();
  }

  updateUser(user: User){
    const userCopy = Object.assign( {}, user);
    this.privateOnSelectedUser.emit(userCopy);
  }

  deleteUserFather(user: User) {
    if(confirm("Sicuro di voler eliminare "+ user.lastname+ "?")){
      this.service.deleteUser(user);
    }
  }

  evidenziaUtente(user) {
    this.service.evidenzia(user.lastname);
  }
}